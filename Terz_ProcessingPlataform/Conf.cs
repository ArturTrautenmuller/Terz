using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;

namespace Terz_ProcessingPlataform
{

    public static class Location
    {
#if DEBUG
        public static string ConfLocation = @"C:\TERZ\ProcessoConf.json";
        public static string serverUrl = "http://localhost:8080/Terz";
#else
        public static string ConfLocation = "/root/terz/ProcessoConf.json";
        public static string serverUrl = "http://terzanalytics.com/Recursos/terz/Imagens";
#endif
    }

    public class Conf
    {

        public string ConfigPath { get; set; }
        public string ProcessoPath { get; set; }
        public string ImagePath {get;set;}
         
    }
}
