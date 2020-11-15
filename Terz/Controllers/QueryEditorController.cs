using System;
using System.Collections.Generic;
using System.IO;
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

            if (!System.IO.File.Exists(configFile))
            {
                QueryConfig queryConfig = new QueryConfig();
                queryConfig.QuerySheets = new List<QuerySheet>();
                string json_text = JsonConvert.SerializeObject(queryConfig, Formatting.Indented);
                System.IO.Directory.CreateDirectory(Path.Combine(conf.QueryConfigPath, id));
                System.IO.File.WriteAllText(configFile, json_text);
            }

            string configText = System.IO.File.ReadAllText(configFile);

            queryEditorView.QueryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);

            Terz_DataBaseLayer.Report report = new Terz_DataBaseLayer.Report();
            report.Load(id);

            queryEditorView.Report = report;

            return PartialView(queryEditorView);
        }

        public PartialViewResult AddFilter([FromQuery(Name = "id")] string id, [FromQuery(Name = "df")] string df)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

          //  string configFile = conf.QueryConfigPath + "/" + id + "/config.json";
          //  string configText = System.IO.File.ReadAllText(configFile);
          //  QueryConfig queryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);
          //  string df = queryConfig.QuerySheets.FirstOrDefault(s => s.Order == sheet).DataFrame;
            string dfFile = System.IO.Path.Combine(conf.DataFramePath,id,df+".csv");
            string colunms = System.IO.File.ReadLines(dfFile).First();
            Models.QueryEditor.AddFilterView addFilterView = new Models.QueryEditor.AddFilterView();
            addFilterView.Filters = colunms.Split(",").ToList();


            return PartialView(addFilterView);
        }

        public PartialViewResult AddField([FromQuery(Name = "id")] string id, [FromQuery(Name = "df")] string df)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

          //  string configFile = conf.QueryConfigPath + "/" + id + "/config.json";
          //  string configText = System.IO.File.ReadAllText(configFile);
          //  QueryConfig queryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);
          //  string df = queryConfig.QuerySheets.FirstOrDefault(s => s.Order == sheet).DataFrame;
            string dfFile = System.IO.Path.Combine(conf.DataFramePath, id, df + ".csv");
            string colunms = System.IO.File.ReadLines(dfFile).First();
            Models.QueryEditor.AddFilterView addFilterView = new Models.QueryEditor.AddFilterView();
            addFilterView.Filters = colunms.Split(",").ToList();


            return PartialView(addFilterView);
        }

        public PartialViewResult AddSheet([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            Models.QueryEditor.AddSheetView addSheetView = new Models.QueryEditor.AddSheetView();
            addSheetView.DataFrames = new List<string>();

            string[] fileEntries = Directory.GetFiles(Path.Combine(conf.DataFramePath,id));
            foreach (string fileName in fileEntries)
            {
                addSheetView.DataFrames.Add(Path.GetFileNameWithoutExtension(fileName));
            }

            return PartialView(addSheetView);
               
        }

        public string Save([FromQuery(Name = "id")] string id, QueryConfig config)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            string configFile = Path.Combine(conf.QueryConfigPath, id, "config.json");

            for (int i = 0; i < config.QuerySheets.Count; i++)
            {
                if (config.QuerySheets[i].Filters == null) config.QuerySheets[i].Filters = new List<string>();
                if (config.QuerySheets[i].QueryFields == null) config.QuerySheets[i].QueryFields = new List<QueryField>();
                if (config.QuerySheets[i].QueryFilterValues == null) config.QuerySheets[i].QueryFilterValues = new List<QueryFilterValues>();

                for (int j = 0; j < config.QuerySheets[i].QueryFilterValues.Count; j++)
                {
                    if (config.QuerySheets[i].QueryFilterValues[j].Values == null) config.QuerySheets[i].QueryFilterValues[j].Values = new List<string>();
                   

                }

            }


            string json_text = JsonConvert.SerializeObject(config, Formatting.Indented);
            System.IO.File.WriteAllText(configFile, json_text);

            List<string> dfs = config.QuerySheets.Where(s => s.Filters.Count > 0 && s.QueryFields.Count > 0).Select(s => s.DataFrame).ToList();
            Query.ProcessDataFrames(dfs, Path.Combine(conf.DataFramePath, id), Path.Combine(conf.QueryConfigPath, id));

            return "Aplicativo Salvo";
        }
    }
}