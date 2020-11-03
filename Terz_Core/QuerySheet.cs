using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class QuerySheet
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Order { get; set; }
        public List<string> Filters { get; set; }
        public string DataFrame { get; set; }
        public List<QueryField> QueryFields { get; set; }
        public List<QueryFilterValues> QueryFilterValues { get; set; }
    }
}
