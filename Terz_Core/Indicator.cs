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
        public string Icon { get; set; }
        public string NavigateTo { get; set; }
        public string SetVarsName { get; set; }
        public string SetVarsContent { get; set; }

    }
}
