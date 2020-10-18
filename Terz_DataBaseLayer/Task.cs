using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Task
    {
        public string Id { get; set; }
        public string ProcessoId { get; set; }
        public string Tipo { get; set; }
        public string Hora { get; set; }
        public string ParentId { get; set; }
        public string Nome { get; set; }
        public string Status { get; set; }

        public void Load(string Id)
        {
            Base.Init();
            var sql = "SELECT id,processo_id,tipo,CAST(hora as char),parent_id,nome,status FROM task WHERE id = "+Id;
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.Id = Convert.ToString(myReader.GetValue(0));
                this.ProcessoId = Convert.ToString(myReader.GetValue(1));
                this.Tipo = myReader.GetString(2);
                this.Hora = myReader.GetString(3);
                this.ParentId = Convert.ToString(myReader.GetValue(4));
                this.Nome = myReader.GetString(5);
                this.Status = myReader.GetString(6);

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();

        }

        public List<Terz_DataBaseLayer.Task> getChildrenTasks()
        {
            List<Terz_DataBaseLayer.Task> tasks = new List<Task>();
            Base.Init();
            var sql = "SELECT id,processo_id,tipo,CAST(hora as char),parent_id,nome,status FROM task WHERE parent_id = " + this.Id;
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                Task task = new Task();
                task.Id = Convert.ToString(myReader.GetValue(0));
                task.ProcessoId = Convert.ToString(myReader.GetValue(1));
                task.Tipo = myReader.GetString(2);
                task.Hora = myReader.GetString(3);
                task.ParentId = Convert.ToString(myReader.GetValue(4));
                task.Nome = myReader.GetString(5);
                task.Status = myReader.GetString(6);

                tasks.Add(task);

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();

            return tasks;

        }

        public void Insert()
        {
            Base.Init();


            var sql = "INSERT INTO `task` (`id`, `processo_id`, `tipo`, `hora`, `parent_id`,`nome`,`status`) VALUES (NULL, '" + this.ProcessoId+"', '"+this.Tipo+"', '"+this.Hora+"', '"+this.ParentId+"','"+this.Nome+"','"+this.Status+"')";

            this.Id = Convert.ToString(Base.sqlCommandAndGetId(sql));


        }

        public void Delete()
        {
            Base.Init();
            var sql = "DELETE FROM task WHERE id = " + this.Id;
            Base.sqlCommand(sql);
        }
    }
}
