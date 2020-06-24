using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Avaliacao
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string ReportId { get; set; }
        public int Nota { get; set; }

        public bool Exists()
        {
            Base.Init();
            var sql = "select * from avaliacao where user_id = '" + this.UserId + "' and report_id = '"+this.ReportId+"'";
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
            var sql = "INSERT INTO `avaliacao` (`id`, `user_id`, `report_id`,`nota`) VALUES (NULL, '" + this.UserId + "', '" + this.ReportId + "', '"+this.Nota+"')";
            Base.sqlCommand(sql);
        }

        public void UpdateNota()
        {
            Base.Init();
            var sql = "UPDATE `avaliacao` SET nota = '"+this.Nota+"' WHERE user_id = '"+this.UserId+"' AND report_id = '"+this.ReportId+"' ";
            Base.sqlCommand(sql);
        }
    }
}
