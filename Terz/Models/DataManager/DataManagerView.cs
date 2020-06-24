using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Terz.Models.DataManager
{
    public class DataManagerView
    {
        public string Id { get; set; }
        public List<DataFrameInfo> DataFrameInfos { get; set; }
    }
}
