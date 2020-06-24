using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_DataBaseLayer;
namespace Terz.Models.Report
{
    public class ReportView
    {
        public string Id { get; set; }
        public Terz_DataBaseLayer.Report Report { get; set; }
        public Terz_DataBaseLayer.CategoryCollection Categories { get; set; }
    }
}
