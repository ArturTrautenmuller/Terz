using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Referencia
    {
        public string Id { get; set; }
        public string ReportId { get; set; }
        public string Descricao { get; set; }

        public void Insert()
        {
            Base.Init();
            var sql = "INSERT INTO `referencia` (`id`, `report_id`, `descricao`) VALUES (NULL, '" + this.ReportId + "', '" + this.Descricao + "')";
            Base.sqlCommand(sql);
        }

        public void Update()
        {
            Base.Init();
            var sql = "UPDATE `referencia` set descricao = '" + this.Descricao + "' WHERE id = " + this.Id;
            Base.sqlCommand(sql);
        }

        public void Delete()
        {
            Base.Init();
            var sql = "DELETE FROM `referencia` WHERE id = " + this.Id;
            Base.sqlCommand(sql);
        }
    }

}
