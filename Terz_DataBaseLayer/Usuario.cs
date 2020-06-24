using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;

namespace Terz_DataBaseLayer
{
    public class Usuario
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public List<Report> Reports { get; set; }

        public void Load(string Id)
        {
            Base.Init();
            var sql = "select * from usuario where id = '" + Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.Id = Convert.ToString(myReader.GetValue(0));
                this.Email = myReader.GetString(1);
                this.Senha = myReader.GetString(2);

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();
            
        }
        
        public void Auth(string Email,string Senha)
        {
            Base.Init();
            var sql = "select * from usuario where email = '" + Email + "' and senha = '"+Senha+"'";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.Id = Convert.ToString(myReader.GetValue(0));
                this.Email = myReader.GetString(1);
                this.Senha = myReader.GetString(2);

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();
        }

        public void LoadReports()
        {
            this.Reports = new List<Report>();
            Base.Init();
            var sql = "select * from report where user_id = '" + this.Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Report report = new Report();

                report.Id = Convert.ToString(myReader.GetValue(0));
                report.UserId = Convert.ToString(myReader.GetValue(1));
                report.Titulo = myReader.GetString(2);
                report.Imagem = myReader.GetString(3);

                this.Reports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();
        }

        public bool Existis()
        {
            Base.Init();
            var sql = "select * from usuario where email = '" + this.Email + "'";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
               

                myReader.Close();
                Base.connection.Close();
                return true;

            }

            myReader.Close();
            Base.connection.Close();

            return false;
        }

        public void Insert()
        {
            Base.Init();
            var sql = "INSERT INTO `usuario` (`id`, `email`, `senha`) VALUES (NULL, '" + this.Email + "', '" + this.Senha + "')";
            Base.sqlCommand(sql);
        }

    }

    }



