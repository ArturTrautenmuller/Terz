﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class Filter
    {
        public string Id { get; set; }
        public Style Style { get; set; }
        public string DataFrameName {get; set;}
        public Dimension Dimension { get; set; }
        public bool MultiValue { get; set; }

}

}
