using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Terz_Core
{
    public class QueryContent
    {
        public List<Parameter> Parameters { get; set; }
    }

    public class Parameter
    {
        public string Field { get; set; }
        public List<string> Values { get; set; }
    }
}
