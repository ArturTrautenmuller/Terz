using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class ReportCollection
    {
        public List<Report> Reports { get; set; }
        public void LoadN()
        {
            this.Reports = new List<Report>();
            Base.Init();
            var sql = "select * from report order by score";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Report report = new Report();
                report.Id = Convert.ToString(myReader.GetValue(0));
                report.UserId = Convert.ToString(myReader.GetValue(1));
                report.Titulo = myReader.GetString(2);
                report.Imagem = myReader.GetString(3);
                report.CategoriaId = Convert.ToString(myReader.GetValue(4));
                report.Score = Convert.ToInt32(myReader.GetValue(5));
                report.Rank = Convert.ToInt32(myReader.GetValue(6));
                report.Ativo = Convert.ToInt32(myReader.GetValue(7));
                this.Reports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();

            this.Reports.ForEach(r => r.getViews());
            this.Reports.ForEach(r => r.getAvaliations());

        }

        public int getMaxScore()
        {
            Base.Init();
            var sql = "select max(score) from report ";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                int score = Convert.ToInt32(myReader.GetValue(0)) + 1;
                myReader.Close();
                Base.connection.Close();
                return score;

            }

            myReader.Close();
            Base.connection.Close();

            return 0;
        }

        public int getMaxScore(int categoryId)
        {
            Base.Init();
            var sql = "select max(score) from report  where id_categoria = " + categoryId ;
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                int score = Convert.ToInt32(myReader.GetValue(0)) + 1;
                myReader.Close();
                Base.connection.Close();
                return score;

            }

            myReader.Close();
            Base.connection.Close();

            return 0;
        }

        public void LoadN(int limit,int rank,string keyword) {
            this.Reports = new List<Report>();
            Base.Init();
            var sql = "select * from report where ranque > "+rank+" and titulo like '"+keyword+ "' and privado <> '1' and ativo = '1' order by score DESC " + "LIMIT "+limit;
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Report report = new Report();
                report.Id = Convert.ToString(myReader.GetValue(0));
                report.UserId = Convert.ToString(myReader.GetValue(1));
                report.Titulo = myReader.GetString(2);
                report.Imagem = myReader.GetString(3);
                report.CategoriaId = Convert.ToString(myReader.GetValue(4));
                report.Score = Convert.ToInt32(myReader.GetValue(5));
                report.Rank = Convert.ToInt32(myReader.GetValue(6));
                report.Ativo = Convert.ToInt32(myReader.GetValue(7));
                this.Reports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();

            this.Reports.ForEach(r => r.getViews());
            this.Reports.ForEach(r => r.getAvaliations());

        }
        public void LoadN(int limit,int rank,int categoryId,string keyword)
        {
            this.Reports = new List<Report>();
            Base.Init();
            var sql = "select * from report where ranque > " + rank+ " and titulo like '" + keyword + "' and id_categoria = " + categoryId+ " and privado <> '1' and ativo = '1' order by score DESC " + "LIMIT " + limit;
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Report report = new Report();
                report.Id = Convert.ToString(myReader.GetValue(0));
                report.UserId = Convert.ToString(myReader.GetValue(1));
                report.Titulo = myReader.GetString(2);
                report.Imagem = myReader.GetString(3);
                report.CategoriaId = Convert.ToString(myReader.GetValue(4));
                report.Score = Convert.ToInt32(myReader.GetValue(5));
                report.Rank = Convert.ToInt32(myReader.GetValue(6));
                report.Ativo = Convert.ToInt32(myReader.GetValue(7));
                this.Reports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();

            this.Reports.ForEach(r => r.getViews());
            this.Reports.ForEach(r => r.getAvaliations());
        }
    }
}
