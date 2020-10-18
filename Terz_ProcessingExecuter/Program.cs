using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Terz_Core;
using Terz_DataBaseLayer;
using System.Threading.Tasks;

namespace Terz_ProcessingExecuter
{
    class Program
    {
        static void Main(string[] args)
        {
            string ProcessId;
            string InitTree;
            string TaskId;
            Conf Conf;

            Init.getProcessId(out ProcessId,args);
            Init.getInitTree(out InitTree,args);
            Init.getConf(out Conf);
            Init.getTaskId(out TaskId,args);

            Runner.Run(ProcessId,InitTree,Conf,TaskId);

           


        }

       


        
    }
}
