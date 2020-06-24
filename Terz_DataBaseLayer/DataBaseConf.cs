using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_DataBaseLayer
{
    class DataBaseConf
    {
        public ConnString Conn { get; set; }
    }

    public class ConnString
    {
        public string Server { get; set; }
        public string DataBase { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
    }
}
