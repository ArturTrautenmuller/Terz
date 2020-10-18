using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_ProcessingExecuter
{
    public static class Runner
    {
        public static string Run(string ProcessId, string InitTree, Conf Conf, string TaskId)
        {


            string Cmd;
            string StartDir;

            Init.getCmd(out Cmd);
            Init.getStartDir(out StartDir, Conf, ProcessId);

            string Result = Command.runCmd(StartDir, Cmd);
            Console.WriteLine(Result);

            if (InitTree == "1")
            {
                Terz_DataBaseLayer.Task task = new Terz_DataBaseLayer.Task();
                task.Id = TaskId;
                List<Terz_DataBaseLayer.Task> childernTasks = task.getChildrenTasks();

                foreach (Terz_DataBaseLayer.Task cTask in childernTasks)
                {
                    var run = System.Threading.Tasks.Task.Factory.StartNew(() => Run(cTask.ProcessoId, InitTree, Conf, cTask.Id));

                }

            }

            return Result;
        }
    }
}
