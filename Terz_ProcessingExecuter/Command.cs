using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace Terz_ProcessingExecuter
{
    public class Command
    {
        public static string runCmd(string startDir,string cmd)
        {
            
            Console.WriteLine($"/c {cmd}");
            var process = new Process()
            {
                StartInfo = new ProcessStartInfo
                {
#if DEBUG
                    FileName = "cmd.exe",
                    Arguments = $"/c {cmd}",
#else
                    FileName = "/bin/bash",
                    Arguments = "-c \" " + cmd + " \"",
#endif

                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                    WorkingDirectory = startDir
                }
            };
            process.Start();
            string result = process.StandardOutput.ReadToEnd();
            process.WaitForExit();
            return result;

           
        }
            

            
    }
}
