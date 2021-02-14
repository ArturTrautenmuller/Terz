using System;
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
        public int MaxSize { get; set; }
        public string Privado { get; set; }
        public List<Visualizacao> Visualizacoes { get; set; }
        public List<Avaliacao> Avaliacoes { get; set; }
        public List<Referencia> Referencias { get; set; }
        public List<string> UsuariosAutorizados { get; set; }

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
                this.MaxSize = Convert.ToInt32(myReader.GetValue(8));
                object privado = myReader.GetValue(9);
                this.Privado = ((privado == null) ? "0" : privado.ToString());

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();

        }

        public void ConcederAcesso(string email)
        {
            Base.Init();
            var sql = $"INSERT INTO `acesso` (`email`, `report_id`) VALUES ('{email}', '{this.Id}')";
            Base.sqlCommand(sql);
        }

        public void RemoverAcesso(string email)
        {
            Base.Init();
            var sql = $"DELETE FROM acesso WHERE email = '{email}' AND report_id = '{this.Id}'";
            Base.sqlCommand(sql);
        }

        public void SetPrivado(string privado)
        {
            Base.Init();
            var sql = $"UPDATE report SET privado = '{privado}' WHERE id = '{this.Id}'";
            Base.sqlCommand(sql);
        }

        public void GetUsuariosAutorizados()
        {
            Base.Init();
            this.UsuariosAutorizados = new List<string>();
            var sql = "select email from acesso where report_id = '" + this.Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
               
                this.UsuariosAutorizados.Add(Convert.ToString(myReader.GetValue(0)));

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

        public bool canReciveUpload(long totalsize)
        {

            long maxSizeBytes = this.MaxSize * 1024 * 1024;
            if (totalsize > maxSizeBytes) return false;
            else return true;
        }

        public void Insert()
        {
            Base.Init();
            this.Ativo = 1;
            this.MaxSize = 10;
            
            var sql = "INSERT INTO `report` (`id`, `user_id`, `titulo`, `imagem`,`id_categoria`,`score`,`ranque`,`ativo`,`max_size`,`privado`) VALUES (NULL, '" + this.UserId+"', '"+this.Titulo+"', '"+this.Imagem+"','"+this.CategoriaId+"','0','0','"+this.Ativo+"','"+this.MaxSize+"','0')";

            this.Id = Convert.ToString(Base.sqlCommandAndGetId(sql));


        }

        public void Delete(string id)
        {
            Base.Init();
            var sql = $"DELETE FROM report WHERE id = '{id}'";
            Base.sqlCommand(sql);
            
        }

        public string getVersion()
        {
            Base.Init();
            var sql = "select version from report_version where report_id = '" + this.Id + "'";
            int version;
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                version = Convert.ToInt32(myReader.GetValue(0));
               

            }
            else
            {
                version = 0;
            }

            myReader.Close();
            Base.connection.Close();
            return version.ToString();
        }

        public void Expandir()
        {
            Base.Init();
            var sql = "UPDATE `report` SET `max_size` = '" + this.MaxSize + "' WHERE `report`.`id` = " + this.Id;
            Base.sqlCommand(sql);
        }

        public void IncrementVersion()
        {
            Base.Init();
            var sql = "select version from report_version where report_id = '" + this.Id + "'";
            int version;
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                version = Convert.ToInt32(myReader.GetValue(0));
                Base.Init();
                var sqlu = "UPDATE `report_version` SET version = '"+(version + 1)+ "' WHERE report_id = " + this.Id;
                Base.sqlCommand(sqlu);

            }
            else
            {
                version = 0;
                var sqli = "INSERT INTO `report_version` (`report_id`, `version`) VALUES ('"+this.Id+"', '"+(version + 1)+"')";
                Base.sqlCommand(sqli);
            }



            myReader.Close();
            Base.connection.Close();


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
            var sql = "UPDATE `report` SET `ranque` = '" + this.Rank + "' WHERE `report`.`id` = " + this.Id;
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
