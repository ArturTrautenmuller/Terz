using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class ComprasCollection
    {
        public List<Compra> Compras { get; set; }
        public void LoadPendentes()
        {
            Base.Init();
            this.Compras = new List<Compra>();
            var sql = "select * from compra where status = 'pendente'";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Compra compra = new Compra();
                compra.Id = Convert.ToString(myReader.GetValue(0));
                compra.CodRef = Convert.ToString(myReader.GetValue(1));
                compra.UserId = Convert.ToString(myReader.GetValue(2));
                compra.Valor = myReader.GetDouble(3);
                compra.Status = myReader.GetString(5);
                compra.Qtd = Convert.ToString(myReader.GetValue(6));


                this.Compras.Add(compra);



            }

            myReader.Close();
            Base.connection.Close();
        }

        
    }
}
