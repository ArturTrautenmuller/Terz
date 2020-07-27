using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz_Core;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using System.IO;

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
        public string UploadConfig([FromQuery(Name = "id")] string id , Config config)
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
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            string configFile = conf.ConfigPath + "/" + id + "/config.json";
            string json_text = JsonConvert.SerializeObject(config, Formatting.Indented);
            System.IO.File.WriteAllText(configFile, json_text);
            return "Aplicativo Salvo";
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
    }

    
}