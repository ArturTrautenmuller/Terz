using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_Core;

namespace Terz.Models.Report
{
    public class ReportData
    {
        public List<DataFrame> DataFrames { get; set; }
        public Config Config { get; set; }
    }
}
