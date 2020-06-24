using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class CategoryCollection
    {
        public List<Category> Categories { get; set; }
        public void Load()
        {
            this.Categories = new List<Category>();
            Base.Init();
            var sql = "select * from categoria_report";
            MySqlDataReader myReader = Base.select(sql);
            while (myReader.Read())
            {
                Category category = new Category();
                category.Id = Convert.ToString(myReader.GetValue(0));
                category.Descricao = myReader.GetString(1);
               
                this.Categories.Add(category);

            }

            myReader.Close();
            Base.connection.Close();
        }
    }

    public class Category
    {
        public string Id { get; set; }
        public string Descricao { get; set; }
    }
}
