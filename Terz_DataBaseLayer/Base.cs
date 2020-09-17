using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using MySql.Data;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace Terz_DataBaseLayer
{
    public static class Base
    {
        public static MySqlConnection connection;
        public static void Init()
        {
#if DEBUG
            string confFile = @"C:\TERZ\DataBaseConf.json";
#else
            string confFile = "/root/terz/DataBaseConf.json";
#endif
            string confInfoTxt = File.ReadAllText(confFile);

            DataBaseConf conf = JsonConvert.DeserializeObject<DataBaseConf>(confInfoTxt);



            string server = conf.Conn.Server;
            string database = conf.Conn.DataBase;
            string uid = conf.Conn.User;
            string password = conf.Conn.Password;
            string connectionString;
            connectionString = "SERVER=" + server + ";" + "DATABASE=" +
            database + ";" + "UID=" + uid + ";" + "PASSWORD=" + password + ";";

            connection = new MySqlConnection(connectionString);
        }

        public static MySqlDataReader select(string sql)
        {

            try
            {

                MySqlCommand query = new MySqlCommand(sql, connection);
                connection.Open();

                MySqlDataReader myReader = query.ExecuteReader();



                return myReader;
            }
            catch (Exception e)
            {
              //  System.IO.File.WriteAllText("/root/error.txt", e.Message);
                return null;
            }
        }
        public static int sqlCommandAndGetId(string sql)
        {
            connection.Close();
            connection.Open();
            MySqlCommand command = new MySqlCommand(sql, connection);
            try
            {


                command.ExecuteNonQuery();
                int id = (int)command.LastInsertedId;
                connection.Close();
                return id;

            }
            catch (Exception e)
            {
             //   System.IO.File.WriteAllText("/root/error.txt", e.Message);
                return 0;
            }
        }
        public static bool sqlCommand(string sql)
        {

            connection.Close();
            connection.Open();
            MySqlCommand command = new MySqlCommand(sql, connection);
            try
            {


                command.ExecuteNonQuery();
                connection.Close();
                return true;

            }
            catch (Exception e)
            {
              //  System.IO.File.WriteAllText("/root/error.txt", e.Message);
                return false;
            }

        }


    }
}
