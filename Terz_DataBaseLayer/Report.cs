﻿using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;

namespace Terz_DataBaseLayer
{
    public class Report
    {

        public string Id { get; set; }
        public string UserId { get; set; }
        public string Titulo { get; set; }
        public string Imagem { get; set; }
        public string CategoriaId { get; set; }
        public int Score { get; set; }
        public int Rank { get; set; }
        public int Ativo { get; set; }
        public List<Visualizacao> Visualizacoes { get; set; }
        public List<Avaliacao> Avaliacoes { get; set; }
        public List<Referencia> Referencias { get; set; }

        public void Load(string Id)
        {
            Base.Init();
            var sql = "select * from report where id = '" + Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.Id = Convert.ToString(myReader.GetValue(0));
                this.UserId = Convert.ToString(myReader.GetValue(1));
                this.Titulo = myReader.GetString(2);
                this.Imagem = myReader.GetString(3);
                this.CategoriaId = Convert.ToString(myReader.GetValue(4));
                this.Score = Convert.ToInt32(myReader.GetValue(5));
                this.Rank = Convert.ToInt32(myReader.GetValue(6));
                this.Ativo = Convert.ToInt32(myReader.GetValue(7));

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();

        }

        public void getViews()
        {

            Base.Init();
            this.Visualizacoes = new List<Visualizacao>();
            var sql = "select id,user_id,report_id,CAST(data as CHAR) from visualizacao where report_id = '" + this.Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Visualizacao visualizacao = new Visualizacao();
                visualizacao.Id = Convert.ToString(myReader.GetValue(0));
                visualizacao.UserId = Convert.ToString(myReader.GetValue(1));
                visualizacao.ReportId = Convert.ToString(myReader.GetValue(2));
                visualizacao.Data = Convert.ToString(myReader.GetValue(3));

                this.Visualizacoes.Add(visualizacao);



            }

            myReader.Close();
            Base.connection.Close();
        }

        public void getAvaliations()
        {
            Base.Init();
            this.Avaliacoes = new List<Avaliacao>();
            var sql = "select * from avaliacao where report_id = '" + this.Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Avaliacao avaliacao = new Avaliacao();
                avaliacao.Id = Convert.ToString(myReader.GetValue(0));
                avaliacao.UserId = Convert.ToString(myReader.GetValue(1));
                avaliacao.ReportId = Convert.ToString(myReader.GetValue(2));
                avaliacao.Nota = Convert.ToInt32(myReader.GetValue(3));

                this.Avaliacoes.Add(avaliacao);



            }

            myReader.Close();
            Base.connection.Close();
        }

        public void getReference()
        {
            Base.Init();
            this.Referencias = new List<Referencia>();
            var sql = "select * from referencia where report_id = '" + this.Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Referencia referencia = new Referencia();
                referencia.Id = Convert.ToString(myReader.GetValue(0));
                referencia.ReportId = Convert.ToString(myReader.GetValue(1));
                referencia.Descricao = myReader.GetString(2);

                this.Referencias.Add(referencia);



            }

            myReader.Close();
            Base.connection.Close();
        }

        public void Insert()
        {
            Base.Init();
            this.Ativo = 1;
            var sql = "INSERT INTO `report` (`id`, `user_id`, `titulo`, `imagem`,`id_categoria`,`ativo`) VALUES (NULL, '" + this.UserId+"', '"+this.Titulo+"', '"+this.Imagem+"','"+this.CategoriaId+"','"+this.Ativo+"')";
            this.Id = Convert.ToString(Base.sqlCommandAndGetId(sql));
            
        }

        public void Update()
        {
            Base.Init();
            var sql = "UPDATE `report` SET `titulo` = '"+this.Titulo+"', `imagem` = '"+this.Imagem+"' WHERE `report`.`id` = "+this.Id;
            Base.sqlCommand(sql);
        }

        public void setScore()
        {
            Base.Init();
            var sql = "UPDATE `report` SET `score` = '" + this.Score + "' WHERE `report`.`id` = " + this.Id;
            Base.sqlCommand(sql);
        }
        public void setRank()
        {
            Base.Init();
            var sql = "UPDATE `report` SET `rank` = '" + this.Rank + "' WHERE `report`.`id` = " + this.Id;
            Base.sqlCommand(sql);
        }

        public void setAtivo()
        {
            Base.Init();
            var sql = "UPDATE `report` SET `ativo` = '" + this.Ativo + "' WHERE `report`.`id` = " + this.Id;
            Base.sqlCommand(sql);
        }

       
    
}
}
