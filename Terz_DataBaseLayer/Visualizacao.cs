using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Visualizacao
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string ReportId { get; set; }


        public void Insert()
        {
            Base.Init();
            var sql = "INSERT INTO `visualizacao` (`id`, `user_id`, `report_id`) VALUES (NULL, '" + this.UserId + "', '" + this.ReportId + "')";
            Base.sqlCommand(sql);
        }
    }
}
