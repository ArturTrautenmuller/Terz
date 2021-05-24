using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class Sheet
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Order { get; set; }
        public List<Graph> Graphs { get; set; }
        public List<Indicator> Indicators { get; set; }
        public List<Filter> Filters { get; set; }
        public List<TextBlock> TextBlocks { get; set; }
        public List<VariableInput> variableInputs { get; set; }
        public Style Style { get; set; }
    }
}
