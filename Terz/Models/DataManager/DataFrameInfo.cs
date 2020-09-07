using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Terz.Models.DataManager
{
    public class DataFrameInfo
    {
        public string Name { get; set; }
        public List<string> Fields { get; set; }
        public long Size { get; set; }
    }
}
