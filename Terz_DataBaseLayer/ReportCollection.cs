using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class ReportCollection
    {
        public List<Report> Reports { get; set; }
        public void LoadN(int limit) {
            this.Reports = new List<Report>();
            Base.Init();
            var sql = "select * from report order by score DESC "+"LIMIT "+limit;
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Report report = new Report();
                report.Id = Convert.ToString(myReader.GetValue(0));
                report.UserId = Convert.ToString(myReader.GetValue(1));
                report.Titulo = myReader.GetString(2);
                report.Imagem = myReader.GetString(3);
                report.CategoriaId = Convert.ToString(myReader.GetValue(4));
                this.Reports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();

            this.Reports.ForEach(r => r.getViews());
            this.Reports.ForEach(r => r.getAvaliations());

        }
        public void LoadN(int limit,int categoryId)
        {
            this.Reports = new List<Report>();
            Base.Init();
            var sql = "select * from report where id_categoria = "+categoryId+ " order by score DESC " + "LIMIT " + limit;
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Report report = new Report();
                report.Id = Convert.ToString(myReader.GetValue(0));
                report.UserId = Convert.ToString(myReader.GetValue(1));
                report.Titulo = myReader.GetString(2);
                report.Imagem = myReader.GetString(3);
                report.CategoriaId = Convert.ToString(myReader.GetValue(4));
                this.Reports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();

            this.Reports.ForEach(r => r.getViews());
            this.Reports.ForEach(r => r.getAvaliations());
        }
    }
}
