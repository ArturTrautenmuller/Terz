using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Terz_Core;
using Terz_DataBaseLayer;

namespace Terz.Controllers
{
    public class DataManagerController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");

            if (userId == null || userId == "")
            {
                return PartialView("~/Views/Home/Login.cshtml");
            }
            if (!Security.CheckReportPermission(userId, id))
            {
                return PartialView("~/Views/Home/Login.cshtml");
            }
            Models.DataManager.DataManagerView dataManagerView = new Models.DataManager.DataManagerView();
            dataManagerView.Id = id;
            List<Models.DataManager.DataFrameInfo> dataFrameInfos = new List<Models.DataManager.DataFrameInfo>();
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);


            string[] df_files = System.IO.Directory.GetFiles(conf.DataFramePath + "/" + id);
            foreach (string df in df_files)
            {
                Models.DataManager.DataFrameInfo dataFrameInfo = new Models.DataManager.DataFrameInfo();
                dataFrameInfo.Name = System.IO.Path.GetFileNameWithoutExtension(df);
                string header = System.IO.File.ReadLines(df).First();
                dataFrameInfo.Fields = header.Split(',').ToList();
                dataFrameInfo.Size = new FileInfo(df).Length;
                dataFrameInfos.Add(dataFrameInfo);
            }
            dataManagerView.DataFrameInfos = dataFrameInfos;
            dataManagerView.Report = new Report();
            dataManagerView.Report.Load(id);
            dataManagerView.Report.getReference();
            
            return PartialView(dataManagerView);
        }
        public string AddReferencia(Terz_DataBaseLayer.Referencia referencia)
        {
            string userId = HttpContext.Session.GetString("User");

            if (userId == null || userId == "")
            {
                return "not authenticated";
            }
            if (!Security.CheckReportPermission(userId, referencia.ReportId))
            {
                return "no permission";
            }
            referencia.Insert();
            return "ok";
        }

        public string ExpandirRelatorio([FromQuery(Name = "id")] string id, [FromQuery(Name = "opcao")] string opcao)
        {

            Pricing pricing = new Pricing();
            ExpancaoAtributos atributos = pricing.ExpancaoPricing[opcao];

            string userId = HttpContext.Session.GetString("User");
            if(userId == null || userId == "")
            {
                return "não autenticado";
            }
            if (!Security.CheckReportPermission(userId, id))
            {
                return "sem permisão";
            }

            Usuario usuario = new Usuario();
            usuario.Load(userId);
            if(usuario.Creditos < atributos.Consumo)
            {
                return "não há créditos suficientes";
            }

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            long dirSize = Operations.getFolderSize(conf.DataFramePath + "/" + id);

            if(dirSize > atributos.Size * 1024 * 1024)
            {
                return "remova seus arquivos para diminuir seu espaço";
            }


            Expansao expansao = new Expansao();
            expansao.ReportId = id;
            expansao.Consumo = atributos.Consumo;
            expansao.Size = atributos.Size;
            expansao.Delete();
            expansao.Insert();

            Report report = new Report();
            report.Load(id);
            report.MaxSize = atributos.Size;
            report.Expandir();

            return "ok";
        }

        public PartialViewResult ExpandOptions([FromQuery(Name = "id")] string id)
        {
            return PartialView();
        }



        public async Task<string> UploadDataFrame([FromQuery(Name = "id")] string id)
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

            

            var files = Request.Form.Files;
            long dirSize = Operations.getFolderSize(conf.DataFramePath + "/" + id);
            long filesSize = Operations.getFilesSize(files);
            long repetedFilesSize = Operations.getRepetedFilesSize(files, conf.DataFramePath + "/" + id);

            Report report = new Report();
            report.Load(id);

            bool canUpload = report.canReciveUpload(dirSize + filesSize - repetedFilesSize);
            if (!canUpload)
            {
                return "não há espaço suficiente para subir esses arquivos";
            }
            List<string> dfs = new List<string>();
            foreach (var file in files)
            {
                var filePath = Path.Combine(conf.DataFramePath + "/" + id, file.FileName);
                dfs.Add(Path.GetFileNameWithoutExtension(file.FileName));
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
            }

            
            report.IncrementVersion();
            Query.ProcessDataFrames(dfs, Path.Combine(conf.DataFramePath, id), Path.Combine(conf.QueryConfigPath, id));

            return "ok";
        }

        

        public string RenameDataFrame([FromQuery(Name = "id")] string id, [FromQuery(Name = "name")] string name, [FromQuery(Name = "newname")] string newName)
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
            var oldFile = Path.Combine(conf.DataFramePath + "/" + id, name+".csv");
            var newFile = Path.Combine(conf.DataFramePath + "/" + id, newName + ".csv");
            System.IO.File.Move(oldFile, newFile);
            Report report = new Report();
            report.Load(id);
            report.IncrementVersion();
            return "ok";
        }

        public string RenameReferencia([FromQuery(Name = "id")] string id, [FromQuery(Name = "desc")] string desc)
        {
            string userId = HttpContext.Session.GetString("User");

            if (userId == null || userId == "")
            {
                return "not authenticated";
            }
            if (!Security.CheckReferencePermission(userId, id))
            {
                return "no permission";
            }
            Terz_DataBaseLayer.Referencia referencia = new Referencia();
            referencia.Id = id;
            referencia.Descricao = desc;
            referencia.Update();

            return "ok";
        }

        public string DeleteDataFrame([FromQuery(Name = "id")] string id, [FromQuery(Name = "name")] string name)
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
            var file = Path.Combine(conf.DataFramePath + "/" + id, name + ".csv");
            System.IO.File.Delete(file);
            Report report = new Report();
            report.Load(id);
            report.IncrementVersion();
            return "ok";
        }

        public string DeleteReferencia([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");

            if (userId == null || userId == "")
            {
                return "not authenticated";
            }
            if (!Security.CheckReferencePermission(userId, id))
            {
                return "no permission";
            }
            Terz_DataBaseLayer.Referencia referencia = new Referencia();
            referencia.Id = id;
            referencia.Delete();
            return "ok";
        }
    }
}