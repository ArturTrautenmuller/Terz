using System;
using System.Linq;
using Terz_Core;
using Terz_DataBaseLayer;


namespace Terz_Scheduler
{
    class Program
    {
        static void Main(string[] args)
        {
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
