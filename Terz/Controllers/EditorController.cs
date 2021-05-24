using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz_Core;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using System.IO;
using Terz_DataBaseLayer;

namespace Terz.Controllers
{
    public class EditorController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");

            if(userId == null || userId == "")
            {
                return PartialView("~/Views/Home/Login.cshtml");
            }
            if (!Security.CheckReportPermission(userId, id))
            {
                return PartialView("~/Views/Home/Login.cshtml");
            }

            Models.Editor.EditorView editorView = new Models.Editor.EditorView();
            editorView.Id = id;
            return PartialView(editorView);
        }
        public string UploadConfig([FromQuery(Name = "id")] string id , ContentJson contentJson)
        {
            string userId = HttpContext.Session.GetString("User");

            if (userId == null || userId == "")
            {
                return "not authenticated";
            }
            if (!Security.CheckReportPermission(userId, id))
            {
                return "no permission";
            }

            Config config = JsonConvert.DeserializeObject<Config>(contentJson.ContentJsonText);

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            string configFile = conf.ConfigPath + "/" + id + "/config.json";

            for(int i = 0; i < config.Sheets.Count; i++)
            {
                if (config.Sheets[i].Indicators == null) config.Sheets[i].Indicators = new List<Indicator>();
                if (config.Sheets[i].Graphs == null) config.Sheets[i].Graphs = new List<Graph>();

                for(int j = 0; j < config.Sheets[i].Graphs.Count; j++)
                {
                    if (config.Sheets[i].Graphs[j].Measures == null) config.Sheets[i].Graphs[j].Measures = new List<Measure>();
                    if (config.Sheets[i].Graphs[j].Dimensions == null) config.Sheets[i].Graphs[j].Dimensions = new List<Dimension>();

                }

                if (config.Sheets[i].Filters == null) config.Sheets[i].Filters = new List<Filter>();
                if (config.Sheets[i].TextBlocks == null) config.Sheets[i].TextBlocks = new List<TextBlock>();
                if (config.Sheets[i].variableInputs == null) config.Sheets[i].variableInputs = new List<VariableInput>();
            }


            string json_text = JsonConvert.SerializeObject(config, Formatting.Indented);
            System.IO.File.WriteAllText(configFile, json_text);

            Report report = new Report();
            report.Load(id);
            report.IncrementVersion();

            return "Aplicativo Salvo";
        }

        public Models.Report.ReportData GetReportData([FromQuery(Name = "id")] string id)
        {

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Models.Report.ReportData reportData = new Models.Report.ReportData();
            string configFile = conf.ConfigPath + "/" + id + "/config.json";
            string configText = System.IO.File.ReadAllText(configFile);

            reportData.Config = JsonConvert.DeserializeObject<Config>(configText);

            List<DataFrame> dataFrames = new List<DataFrame>();
            string[] df_files = System.IO.Directory.GetFiles(conf.DataFramePath + "/" + id);
            foreach (string df in df_files)
            {
                DataFrame dataFrame = new DataFrame();
                dataFrame.Load(df);
                dataFrames.Add(dataFrame);
            }

            reportData.DataFrames = dataFrames;

            return reportData;
        }

        public PartialViewResult MeasureExp([FromQuery(Name = "id")] string id)
        {
            ViewData["id"] = id;
            return PartialView();
        }

        public PartialViewResult IndiacatorExp()
        {
            return PartialView();
        }

        public PartialViewResult TextExp()
        {
            return PartialView();
        }

        public PartialViewResult VarLabelExp()
        {
            return PartialView();
        }

        public PartialViewResult VarValueExp()
        {
            return PartialView();
        }

        public PartialViewResult VarIndLabelExp()
        {
            return PartialView();
        }

        public PartialViewResult VarIndValueExp()
        {
            return PartialView();
        }

        public PartialViewResult AddIndicador()
        {
            return PartialView();
        }

        public PartialViewResult AddTextBlock()
        {
            return PartialView();
        }

        public PartialViewResult AddGraph()
        {
            return PartialView();
        }

        public PartialViewResult EditIcon()
        {
            return PartialView();
        }
    }

    
}