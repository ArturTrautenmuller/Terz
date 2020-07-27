using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;

namespace Terz_API
{

    public static class Location
    {
        public static string ConfLocation = @"C:\TERZ\Conf.json";
        public static string serverUrl = "http://localhost:8080";
    }

    public class Conf
    {

        public string ConfigPath { get; set; }
        public string DataFramePath { get; set; }
        public string ImagePath {get;set;}
         
    }
}
