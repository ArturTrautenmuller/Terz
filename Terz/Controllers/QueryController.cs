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
    public class QueryController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Models.Query.QueryView queryView = new Models.Query.QueryView();
            queryView.Id = id;
            string configFile = conf.QueryConfigPath + "/" + id + "/config.json";
            string configText = System.IO.File.ReadAllText(configFile);

            queryView.QueryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);

            Terz_DataBaseLayer.Report report = new Terz_DataBaseLayer.Report();
            report.Load(id);

            queryView.Report = report;


            return PartialView(queryView);
        }

        public QueryConfig GetQueryConfig([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Models.Query.QueryView queryView = new Models.Query.QueryView();
            string configFile = conf.QueryConfigPath + "/" + id + "/config.json";
            string configText = System.IO.File.ReadAllText(configFile);

            return JsonConvert.DeserializeObject<QueryConfig>(configText);
        }

        public List<string[]> ExecuteQuery([FromQuery(Name = "id")] string id, [FromQuery(Name = "sheet")] string sheet,[FromBody] QueryContent queryContent)
        {
           // QueryContent queryContent = JsonConvert.DeserializeObject<QueryContent>(queryContentText);
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Models.Query.QueryView queryView = new Models.Query.QueryView();
            string configFile = conf.QueryConfigPath + "/" + id + "/config.json";
            string configText = System.IO.File.ReadAllText(configFile);

            QueryConfig queryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);
            DataFrame dataFrame = new DataFrame();

            QuerySheet querySheet = queryConfig.QuerySheets.FirstOrDefault(s => s.Order == sheet);

            dataFrame.Load(Path.Combine(conf.DataFramePath, id, querySheet.DataFrame + ".csv"));

            DataFrame filteredDataFarme = dataFrame.ApplyFilter(queryContent);
            DataFrame selectedDataFrame = filteredDataFarme.Select(querySheet.QueryFields.Select(f => f.Field).ToList());
            

            return selectedDataFrame.Table;
        }

        
    }
}