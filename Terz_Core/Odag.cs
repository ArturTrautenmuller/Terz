using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class Odag
    {
        public bool Active { get; set; }
        public List<OdagField> OdagFields { get; set; }
        
    }

    public class OdagField
    {
      
        public string Name { get; set; }
        public string Field { get; set; }
        public List<string> DataFrames { get; set; }
        public string MaxValues { get; set; }
    }

    public class OdagValuesCollection
    {
        public OdagValuesCollection()
        {
            this.OdagValues = new List<OdagValues>();
        }
        public List<OdagValues> OdagValues { get; set; }
    }

    public class OdagValues
    {

        public OdagValues(string name)
        {
            this.Name = name;
            this.Values = new List<string>();
        }

        public string Name { get; set; }
        public List<string> Values { get; set; } 
    }

    public class OdagFilteredValues
    {
        public string Field { get; set; }
        public List<string> Values { get; set; }
    }
}
