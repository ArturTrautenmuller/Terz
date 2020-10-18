using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class TaskCollection
    {
        public List<Terz_DataBaseLayer.Task> Tasks { get; set; }

        public void LoadAll()
        {
            this.Tasks = new List<Task>();
            Base.Init();
            var sql = "SELECT id,processo_id,tipo,CAST(hora as char),parent_id,nome,status FROM task";
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

        public void LoadAllDaily()
        {
            this.Tasks = new List<Task>();
            Base.Init();
            var sql = "SELECT id,processo_id,tipo,CAST(hora as char),parent_id,nome,status FROM task WHERE tipo = 'daily'";
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

    }
}
