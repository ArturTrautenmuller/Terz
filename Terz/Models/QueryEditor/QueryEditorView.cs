using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_Core;

namespace Terz.Models.QueryEditor
{
    public class QueryEditorView
    {
        public string Id { get; set; }
        public QueryConfig QueryConfig { get; set; }
        public Terz_DataBaseLayer.Report Report { get; set; }
    }
}
