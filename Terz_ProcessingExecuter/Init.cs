using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Terz_ProcessingExecuter
{
    public static class Init
    {
        public static void getProcessId(out string ProcessId,string[] pArgs)
        {
#if DEBUG
            ProcessId = "1";
#else
            ProcessId = pArgs[0];
           
#endif
        }

        public static void getTaskId(out string TaskId, string[] pArgs)
        {
#if DEBUG
            TaskId = "1";
#else
            TaskId = pArgs[1];
#endif
        }

        public static void getInitTree(out string InitTree, string[] pArgs)
        {
#if DEBUG
            InitTree = "1";
#else
            InitTree = pArgs[2];
             
#endif
        }

        public static void getConf(out Conf conf)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            conf = JsonConvert.DeserializeObject<Conf>(text);
        }

        public static void getCmd(out string Cmd)
        {
#if DEBUG
            Cmd = "python ";
#else
           Cmd = "python3 ";
          
#endif
            Cmd += "main.py";

        }

        public static void getStartDir(out string StartDir,Conf conf, string ProcessoId)
        {
           
            StartDir = Path.Combine(conf.ProcessoPath, ProcessoId);
        }
    }
}
