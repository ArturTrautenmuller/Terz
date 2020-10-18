using System;
using System.Threading.Tasks;
using System.Timers;
using System.IO;
using Terz_Core;
using Terz_DataBaseLayer;
using Terz_ProcessingExecuter;
using System.Collections.Generic;

namespace Terz_Task_Scheduler
{
    class Program
    {
        
        private static TaskCollection TaskCollection { get; set; }
        private static readonly long refreshTime = 3600000;
        private static List<Timer> TaskTimers { get; set; }

        static void Main(string[] args)
        {
            Init();

            var loaderTimer = new Timer();
            loaderTimer.Elapsed += new ElapsedEventHandler((o, e) => { Refresh(ref loaderTimer); });
            loaderTimer.Interval = refreshTime;
            loaderTimer.Enabled = true;




            Console.ReadKey();
        }

        private static void Init()
        {
            Console.WriteLine("Starting...");
            TaskCollection = new TaskCollection();
            TaskCollection.LoadAllDaily();
            SetTimers();
            Console.WriteLine($"{TaskCollection.Tasks.Count} tasks in process");
        } 

        private static void Refresh(ref Timer timer)
        {
            Console.WriteLine("updating tasks base...");
            TaskCollection.LoadAllDaily();
            SetTimers();
            timer.Interval = refreshTime;
            Console.WriteLine($"{TaskCollection.Tasks.Count} tasks in process");
        }

        private static void SetTimers()
        {
            TaskTimers = new List<Timer>();
            foreach(Terz_DataBaseLayer.Task task in TaskCollection.Tasks)
            {
                var taskTimer = new Timer();
                taskTimer.Elapsed += new ElapsedEventHandler((o, e) => { Execute(task); });
                double interval = Convert.ToDateTime(task.Hora).TimeOfDay.TotalMilliseconds - DateTime.Now.TimeOfDay.TotalMilliseconds;
                if(interval <= 0)
                {
                    interval += TimeSpan.FromHours(24).TotalMilliseconds;
                }

                taskTimer.Interval = interval;
                taskTimer.Enabled = true;

                TaskTimers.Add(taskTimer);
            }

        }

        private static void Execute(Terz_DataBaseLayer.Task task)
        {
            Console.WriteLine($"executing task {task.Id}");
            return;
        }



       
    }
}
