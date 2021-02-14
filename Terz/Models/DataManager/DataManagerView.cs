using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_DataBaseLayer;

namespace Terz.Models.DataManager
{
    public class DataManagerView
    {
        public string Id { get; set; }
        public List<DataFrameInfo> DataFrameInfos { get; set; }
        public Terz_DataBaseLayer.Report Report { get; set; }
        public bool Enterprise { get; set; }
    }
}
