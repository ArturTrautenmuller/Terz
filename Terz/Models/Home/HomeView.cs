using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_DataBaseLayer;

namespace Terz.Models.Home
{
    public class HomeView
    {
       public Terz_DataBaseLayer.ReportCollection Reports { get; set; } 
       public Terz_DataBaseLayer.CategoryCollection Categories { get; set; }
    }
}
