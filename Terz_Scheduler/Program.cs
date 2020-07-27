using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_Core;
using Terz_DataBaseLayer;


namespace Terz_Scheduler
{
    class Program
    {
        public static async Task ConsultaPagamentoAsync()
        {

            ComprasCollection comprasCollection = new ComprasCollection();
            comprasCollection.LoadPendentes();
            PagamentoPagSeguro pagamento = new PagamentoPagSeguro();
            foreach (Compra compra in comprasCollection.Compras)
            {
                bool res = await  pagamento.VerificaPagamento(Convert.ToInt32(compra.CodRef));
                if (res)
                {
                    Usuario usuario = new Usuario();
                    usuario.Load(compra.UserId);
                    usuario.Creditos += Convert.ToInt32(compra.Qtd);
                    usuario.MudaCreditos();

                    compra.Status = "aceito";
                    compra.MudaStatus();
                }
               
            }



        }
        static void Main(string[] args)
        {
            var consultaPagamento = Task.Run(() => ConsultaPagamentoAsync());
            consultaPagamento.Wait();




            ReportCollection reports = new ReportCollection();
            reports.LoadN();

            foreach(Report report in reports.Reports)
            {
                double rating;
                int views;
                if(report.Visualizacoes == null)
                {
                    views = 0;
                }
                else
                {
                    views = report.Visualizacoes.Count;

                }

                if(report.Avaliacoes.Count == 0)
                {
                    rating = 4.5;
                }
                else
                {
                    rating = report.Avaliacoes.Select(a => a.Nota).Average();
                }

                report.Score = Convert.ToInt32(views * Math.Pow(2, rating));
                report.setScore();

               
               
            }

            List<Report> reportsAtivos = reports.Reports.Where(r => r.Ativo == 1).ToList();
            foreach(Report report in reportsAtivos)
            {
                //consumir creditos

                Usuario usuario = new Usuario();
                usuario.Load(report.UserId);

                if (usuario.Creditos <= 0)
                {
                    usuario.LoadReports();
                    usuario.DesativaReports();
                }

                else if (report.Ativo == 1)
                {
                    usuario.Creditos--;
                    usuario.MudaCreditos();
                }
            }

            reports.LoadN();
            ReportCollection rankedReports = new ReportCollection();
            rankedReports.Reports = reports.Reports.OrderByDescending(r => r.Score).ToList();

            int rank = 1;

            foreach(Report report in rankedReports.Reports)
            {
                report.Rank = rank;
                report.setRank();

                rank++;
            }


           // Console.ReadKey();
        }
    }
}
