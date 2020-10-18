using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_DataBaseLayer;

namespace Terz_ProcessingPlataform
{
    public static class Security
    {
        public static bool CheckProcessoPermission(string UserId, string ProcessoId)
        {
            Usuario usuario = new Usuario();
            usuario.Id = UserId;
            usuario.LoadProcessos();
            List<string> processos = usuario.Processos.Select(p => p.Id).ToList();
            if (processos.Contains(ProcessoId))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static bool CheckTaskPermission(string UserId, string TaskId)
        {
            Usuario usuario = new Usuario();
            usuario.Id = UserId;
            usuario.LoadTasks();
            List<string> tasks = usuario.Tasks.Select(t => t.Id).ToList();
            if (tasks.Contains(TaskId))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static bool CheckReferencePermission(string UserId, string ReferenceId)
        {
            Usuario usuario = new Usuario();
            usuario.Id = UserId;
            usuario.LoadReports();
            List<string> references = new List<string>();

            foreach(Terz_DataBaseLayer.Report report in usuario.Reports)
            {
                references.AddRange(report.Referencias.Select(r => r.Id).ToList());
            }

            if (references.Contains(ReferenceId))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
