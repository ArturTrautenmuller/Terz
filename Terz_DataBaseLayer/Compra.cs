using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Compra
    {
        public string Id { get; set; }
        public string CodRef { get; set; }
        public string UserId { get; set; }
        public string Qtd { get; set; }
        public double Valor { get; set; }
        public string Status { get; set; }
        public string Data { get; set; }

        public string Insert()
        {
            this.Data = DateTime.Now.ToString("yy/MM/dd hh:mm:ss");
            this.Status = "pendente";
            Base.Init();
            var sql = "INSERT INTO `compra` (`id`, `ref`, `user_id`, `valor`, `data_hora`, `status`, `qtd`) VALUES (NULL, '0', '"+this.UserId+"', '"+this.Valor+"', '"+this.Data+"', '"+this.Status+"', '"+this.Qtd+"')";
            string id = Base.sqlCommandAndGetId(sql).ToString();
            this.CodRef = id;
            this.Id = id;
            var upt = "UPDATE `compra` set ref = '" + this.CodRef + "' WHERE id = " + this.Id;
            Base.sqlCommand(upt);
            return this.CodRef;

        }

        public void MudaStatus()
        {
            Base.Init();
            var upt = "UPDATE `compra` set status = '" + this.Status + "' WHERE id = " + this.Id;
            Base.sqlCommand(upt);
        }
    }
}
