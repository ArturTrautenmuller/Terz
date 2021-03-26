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
        public string Nome { get; set; }
        public string Foto { get; set; }
        public string Descricao { get; set; }
        public string Habilidades { get; set; }
        public string Lugar { get; set; }
        public string Funcao { get; set; }
        public int Creditos { get; set; }
        public List<Report> Reports { get; set; }
        public List<Report> SharedReports { get; set; }
        public List<Processo> Processos { get; set; }
        public List<Task> Tasks { get; set; }

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
                this.Nome = myReader.GetString(3);
                this.Foto = myReader.GetString(4);
                this.Descricao = myReader.GetString(5);
                this.Habilidades = myReader.GetString(6);
                this.Lugar = myReader.GetString(7);
                this.Funcao = myReader.GetString(8);
                this.Creditos = Convert.ToInt32(myReader.GetValue(9));

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
                this.Nome = myReader.GetString(3);
                this.Foto = myReader.GetString(4);
                this.Descricao = myReader.GetString(5);
                this.Habilidades = myReader.GetString(6);
                this.Lugar = myReader.GetString(7);
                this.Funcao = myReader.GetString(8);
                this.Creditos = Convert.ToInt32(myReader.GetValue(9));

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
            this.Reports.ForEach(r => r.getReference());
        }

        public void LoadSharedReports()
        {
            this.SharedReports = new List<Report>();
            Base.Init();
            var sql = $"select r.* from acesso a left join report r on r.id = a.report_id  where a.email = '{this.Email}'";
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

                this.SharedReports.Add(report);

            }

            myReader.Close();
            Base.connection.Close();

            
        }

        public void DesativaReports()
        {
            foreach(Report report in this.Reports)
            {
                report.Ativo = 0;
                report.setAtivo();
            }
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

        public void LoadProcessos()
        {
            this.Processos = new List<Processo>();
            Base.Init();
            var sql = "select * from processo where user_id = '" + this.Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Processo processo = new Processo();

                processo.Id = Convert.ToString(myReader.GetValue(0));
                processo.UserId = Convert.ToString(myReader.GetValue(1));
                processo.Nome = myReader.GetString(2);

                this.Processos.Add(processo);

            }

            myReader.Close();
            Base.connection.Close();

           
        }

        public void LoadTasks()
        {
            this.Tasks = new List<Task>();
            Base.Init();
            var sql = "SELECT t.id,t.processo_id,t.tipo,CAST(t.hora as char),t.parent_id,t.nome,t.status FROM task t LEFT JOIN processo p on t.processo_id = p.id WHERE p.user_id = "+this.Id;
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Task task = new Task();

                task.Id = Convert.ToString(myReader.GetValue(0));
                task.ProcessoId = Convert.ToString(myReader.GetValue(1));
                task.Tipo = myReader.GetString(2);
                task.Hora = myReader.GetString(3);
                task.ParentId = Convert.ToString(myReader.GetValue(4));
                task.Nome = myReader.GetString(5);
                task.Status = myReader.GetString(6);


                this.Tasks.Add(task);

            }

            myReader.Close();
            Base.connection.Close();


        }

        public void Insert()
        {
            Base.Init();
            var sql = "INSERT INTO `usuario` (`id`, `email`, `senha`, `nome`, `foto`, `descricao`, `habilidades`, `lugar`, `funcao`, `creditos`) VALUES(NULL,'" + this.Email + "', '" + this.Senha + "', '"+this.Nome+"', '', '', '', '', '', '150')";
           
            Base.sqlCommand(sql);
        }

        public void Update()
        {
            Base.Init();
            var sql = "UPDATE `usuario` set nome = '"+this.Nome+"', descricao = '"+this.Descricao+"',lugar = '"+this.Lugar+"',habilidades = '"+this.Habilidades+"',funcao = '"+this.Funcao+"' WHERE id = "+this.Id;
            Base.sqlCommand(sql);
        }

        public void UpdateFoto()
        {
            Base.Init();
            var sql = "UPDATE `usuario` set foto = '" + this.Foto + "' WHERE id = " + this.Id;
            Base.sqlCommand(sql);
        }

        public void MudaCreditos()
        {
            Base.Init();
            var sql = "UPDATE `usuario` set creditos = '"+this.Creditos+"' WHERE id = " + this.Id;
            Base.sqlCommand(sql);
        }

    }

    }



