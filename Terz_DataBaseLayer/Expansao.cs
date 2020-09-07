using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Expansao
    {
        public string ReportId { get; set; }
        public int Consumo { get; set; }
        public int Size { get; set; }

        public void Load(string ReportId)
        {
            Base.Init();
            var sql = "select * from expansao where report_id = '" + ReportId + "'";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.ReportId = Convert.ToString(myReader.GetValue(0));
                this.Consumo = Convert.ToInt32(myReader.GetValue(1));
                this.Size = Convert.ToInt32(myReader.GetValue(2));

               

            }
            else
            {
                this.ReportId = ReportId;
                this.Size = 10;
                this.Consumo = 0;
            }

            myReader.Close();
            Base.connection.Close();
        }

        public void Insert()
        {
           
            Base.Init();
            var sql = "INSERT INTO `expansao` (`report_id`, `consumo`, `size`) VALUES ('"+this.ReportId+"', '"+this.Consumo+"', '"+this.Size+"')";
            Base.sqlCommand(sql);
           

        }

        public void Update()
        {
            Base.Init();
            var sql = "UPDATE `expansao` SET consumo = '"+this.Consumo+"', size = '"+this.Size+"' WHERE report_id = '"+this.ReportId+"'";
            Base.sqlCommand(sql);
        }

        public void Delete()
        {
            Base.Init();
            var sql = "DELETE FROM `expansao`  WHERE report_id = '" + this.ReportId + "'";
            Base.sqlCommand(sql);
        }
    }
}
