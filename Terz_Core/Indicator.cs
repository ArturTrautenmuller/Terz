using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class Indicator
    {
        public string Id { get; set; }
        public Style Style { get; set; }
        public List<string> DataFrameName { get; set; }
        public Measure Measure { get; set; }

    }
}
