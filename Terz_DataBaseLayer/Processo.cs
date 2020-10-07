using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    public class Processo
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string Nome { get; set; }
        public List<Script> Scripts { get; set; }


        public void Load(string Id)
        {
            Base.Init();
            var sql = "select * from processo where id = '" + Id + "'";
            MySqlDataReader myReader = Base.select(sql);
            if (myReader.Read())
            {
                this.Id = Convert.ToString(myReader.GetValue(0));
                this.UserId = Convert.ToString(myReader.GetValue(1));
                this.Nome = myReader.GetString(2);
               

                myReader.Close();
                Base.connection.Close();

            }

            myReader.Close();
            Base.connection.Close();

        }

        public void LoadScripts(string path)
        {
            List<Script> scripts = new List<Script>();
            string[] s_files = System.IO.Directory.GetFiles(path);
            foreach (string s in s_files)
            {
                Script script = new Script();
                script.Path = s;
                script.Nome = System.IO.Path.GetFileNameWithoutExtension(s);
                var lines = System.IO.File.ReadAllLines(s);
                script.Content = "";
                foreach (string line in lines)
                    script.Content += line + Environment.NewLine;
                scripts.Add(script);
            }

            this.Scripts = scripts;
        }

        public void Insert()
        {
            Base.Init();
            

            var sql = "INSERT INTO `processo` (`id`, `user_id`, `nome`) VALUES (NULL, '"+this.UserId+"', '"+this.Nome+"')";

            this.Id = Convert.ToString(Base.sqlCommandAndGetId(sql));


        }
    }

    public class Script
    {
        public string Path { get; set; }
        public string Nome { get; set; }
        public string Content { get; set; }
    }
}
