using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Terz_Core;

namespace Terz.Controllers
{
    public class QueryEditorController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Models.QueryEditor.QueryEditorView queryEditorView = new Models.QueryEditor.QueryEditorView();
            queryEditorView.Id = id;
            string configFile = conf.QueryConfigPath + "/" + id + "/config.json";
            string configText = System.IO.File.ReadAllText(configFile);

            queryEditorView.QueryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);

            Terz_DataBaseLayer.Report report = new Terz_DataBaseLayer.Report();
            report.Load(id);

            queryEditorView.Report = report;

            return PartialView(queryEditorView);
        }
    }
}