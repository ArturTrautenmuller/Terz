using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_DataBaseLayer;

namespace Terz
{
    public static class Security
    {
        public static bool CheckReportPermission(string UserId, string ReportId)
        {
            Usuario usuario = new Usuario();
            usuario.Id = UserId;
            usuario.LoadReports();
            List<string> reports = usuario.Reports.Select(r => r.Id).ToList();
            if (reports.Contains(ReportId))
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
