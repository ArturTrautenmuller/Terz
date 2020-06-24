using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz_Core;
using Newtonsoft.Json;
using System.IO;

namespace Terz.Controllers
{
    public class EditorController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            Models.Editor.EditorView editorView = new Models.Editor.EditorView();
            editorView.Id = id;
            return PartialView(editorView);
        }
        public string UploadConfig([FromQuery(Name = "id")] string id , Config config)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            string configFile = conf.ConfigPath + "/" + id + "/config.json";
            string json_text = JsonConvert.SerializeObject(config, Formatting.Indented);
            System.IO.File.WriteAllText(configFile, json_text);
            return "Aplicativo Salvo";
        }

        public PartialViewResult AddIndicador()
        {
            return PartialView();
        }

        public PartialViewResult AddGraph()
        {
            return PartialView();
        }
    }

    
}