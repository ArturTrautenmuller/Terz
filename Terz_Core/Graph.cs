using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class Graph
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string ObjectType { get; set; }
        public Style Style { get; set; }
        public string DataFrameName { get; set; }
        public List<Dimension> Dimensions { get; set; }
        public List<Measure> Measures { get; set; }


    }
}
