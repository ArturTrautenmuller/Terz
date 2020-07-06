using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz.Models;
using Terz_Core;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Terz_DataBaseLayer;
using System.IO;

namespace Terz.Controllers
{
    public class ReportController : Controller
    {
      //  [Route("[controller]/id")]
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");
            if(userId != null && userId != "")
            {
                Visualizacao visualizacao = new Visualizacao();
                visualizacao.ReportId = id;
                visualizacao.UserId = userId;
                visualizacao.Data = DateTime.Now.ToString("yy/MM/dd hh:mm:ss");
                visualizacao.Insert();
            }
            Models.Report.ReportView reportView = new Models.Report.ReportView();
            reportView.Id = id;
            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            report.getAvaliations();
            report.getViews();
            reportView.Report = report;
            Usuario usuario = new Usuario();
            usuario.Load(report.UserId);
            reportView.Usuario = usuario;
            return PartialView(reportView);
        }

        public PartialViewResult AvaliatePage()
        {
            return PartialView();
        }

        public string Avaliate([FromQuery(Name = "id")] string id, [FromQuery(Name = "score")] string score)
        {
            Avaliacao avaliacao = new Avaliacao();
            avaliacao.UserId = HttpContext.Session.GetString("User");
            avaliacao.ReportId = id;
            avaliacao.Nota = Convert.ToInt32(score);
            if (avaliacao.UserId == null || avaliacao.UserId == "")
            {
                return "não autenticado";
            }
            else
            {
                if (avaliacao.Exists())
                {
                    avaliacao.UpdateNota();
                }
                else
                {
                    avaliacao.Insert();
                }

                return "ok";
            }
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
            string[] df_files = System.IO.Directory.GetFiles(conf.DataFramePath+"/"+id);
            foreach(string df in df_files)
            {
                DataFrame dataFrame = new DataFrame();
                dataFrame.Load(df);
                dataFrames.Add(dataFrame);
            }

            reportData.DataFrames = dataFrames;

            return reportData;
        }

        public string CreateReport([FromQuery(Name = "title")] string title, [FromQuery(Name = "category")] string category)
        {
            string userId = HttpContext.Session.GetString("User");
            Report report = new Report();
            report.Imagem = "";
            report.UserId = userId;
            report.Titulo = title;
            report.CategoriaId = category;
            report.Insert();

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            System.IO.Directory.CreateDirectory(conf.DataFramePath + "/" + report.Id);
            System.IO.Directory.CreateDirectory(conf.ConfigPath + "/" + report.Id);

            Config config = new Config()
            {
                Sheets = new System.Collections.Generic.List<Sheet>() 
            };


            string json_text = JsonConvert.SerializeObject(config, Formatting.Indented);
            string configFile = conf.ConfigPath + "/" + report.Id + "/config.json";
            System.IO.File.WriteAllText(configFile, json_text);




            return "ok";
        }

        public async Task<string> ImportReport([FromQuery(Name = "title")] string title, [FromQuery(Name = "category")] string category)
        {
            string userId = HttpContext.Session.GetString("User");
            Report report = new Report();
            report.Imagem = "";
            report.UserId = userId;
            report.Titulo = title;
            report.CategoriaId = category;
            report.Insert();

            
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            System.IO.Directory.CreateDirectory(conf.DataFramePath + "/" + report.Id);
            System.IO.Directory.CreateDirectory(conf.ConfigPath + "/" + report.Id);

            var file = Request.Form.Files[0];
            string configFile = conf.ConfigPath + "/" + report.Id + "/config.json";
            using (var fileStream = new FileStream(configFile, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }




            return "ok";
        }
    }
}