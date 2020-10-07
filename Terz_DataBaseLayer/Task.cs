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

        public void Load(string Id)
        {
            Base.Init();
            var sql = "SELECT id,processo_id,tipo,CAST(hora as char),parent_id FROM task WHERE id = "+Id;
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.Id = Convert.ToString(myReader.GetValue(0));
                this.ProcessoId = Convert.ToString(myReader.GetValue(1));
                this.Tipo = myReader.GetString(2);
                this.Hora = myReader.GetString(3);
                this.ParentId = Convert.ToString(myReader.GetValue(4));


                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();

        }

        public void Insert()
        {
            Base.Init();


            var sql = "INSERT INTO `task` (`id`, `processo_id`, `tipo`, `hora`, `parent_id`) VALUES (NULL, '"+this.ProcessoId+"', '"+this.Tipo+"', '"+this.Hora+"', '"+this.ParentId+"')";

            this.Id = Convert.ToString(Base.sqlCommandAndGetId(sql));


        }
    }
}
