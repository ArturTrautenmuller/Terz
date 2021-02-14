using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Terz_DataBaseLayer;
using Terz_Core;
using Terz;

namespace Terz_API.Controllers
{
    
    [ApiController]
    public class ReportController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [Route("api/[controller]/{id}/UploadDataFrame")]
        public async Task<string> UploadDataFrame(string id)
        {
            string email = Request.Form["email"].ToString();
            string password = Request.Form["password"].ToString();

            Usuario usuario = new Usuario();
            usuario.Auth(email, password);

            if(usuario.Id == null)
            {
                return "Falha de autenticação, usuario e senha incorretos";
            }

            if (!Security.CheckReportPermission(usuario.Id, id))
            {
                return "no permission";
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            var file = Request.Form.Files[0];
            List<string> dfs = new List<string>();
            dfs.Add(file.FileName);

            long dirSize = Operations.getFolderSize(conf.DataFramePath + "/" + id);
            long filesSize = Operations.getFilesSize(Request.Form.Files);
            long repetedFilesSize = Operations.getRepetedFilesSize(Request.Form.Files, conf.DataFramePath + "/" + id);

            Report report = new Report();
            report.Load(id);

            bool canUpload = false;

            if (conf.Enterprise)
            {
                canUpload = true;
            }
            else
            {
                canUpload = report.canReciveUpload(dirSize + filesSize - repetedFilesSize);
            }

            if (!canUpload)
            {
                return "não há espaço suficiente para subir esses arquivos";
            }

            
            var filePath = Path.Combine(conf.DataFramePath + "/"+id,file.FileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

           
            report.IncrementVersion();
            Query.ProcessDataFrames(dfs, Path.Combine(conf.DataFramePath, id), Path.Combine(conf.QueryConfigPath, id));

            return "DataFrame importado com sucesso";
        }

        [HttpGet]
        [Route("storage/[controller]/importDataFrame/{id}")]
        public string importDataFrame(string id)
        {
            string email = Request.Form["email"].ToString();
            string password = Request.Form["password"].ToString();
            DataFrame dataFrame = JsonConvert.DeserializeObject<DataFrame>(Request.Form["dataframe"].ToString());


            Usuario usuario = new Usuario();
            usuario.Auth(email, password);

            if (usuario.Id == null)
            {
                return "usuario e senha invalidos";
            }

            if (!Security.CheckReportPermission(usuario.Id, id))
            {
                return "no permission";
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            string contentText = "";
            foreach (string[] row in dataFrame.Table)
            {
                contentText += string.Join(",", row) + Environment.NewLine;
            }

            var filePath = Path.Combine(conf.DataFramePath + "/" + id, dataFrame.Name + ".csv");
            System.IO.File.WriteAllText(filePath, contentText);

            List<string> dfs = new List<string>();
            dfs.Add(dataFrame.Name);

            Query.ProcessDataFrames(dfs, Path.Combine(conf.DataFramePath, id), Path.Combine(conf.QueryConfigPath, id));
            return "dataframe importado com sucesso";
        }


        [HttpGet]
        [Route("api/[controller]/{id}/Insert")]

        public string Insert(string id)
        {

            string email = Request.Form["email"].ToString();
            string password = Request.Form["password"].ToString();
            string table = Request.Form["table"].ToString();
            string[] row = JsonConvert.DeserializeObject<string[]>(Request.Form["row"].ToString());





            return "ok";
        }
        [HttpGet]
        [Route("api/[controller]/{id}/Concat")]
        public async Task<string> Concat(string id)
        {
           
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            string email = Request.Form["email"].ToString();
            string password = Request.Form["password"].ToString();
            string table = Request.Form["table"].ToString();

            Usuario usuario = new Usuario();
            usuario.Auth(email, password);

            if (usuario.Id == null)
            {
                return "usuario e senha invalidos";
            }

            if (!Security.CheckReportPermission(usuario.Id, id))
            {
                return "no permission";
            }

            var file = Request.Form.Files[0];
            var filePath = Path.Combine(conf.DataFramePath + "/" + id, table+"add.csv");
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            DataFrame add = new DataFrame();
            add.Load(Path.Combine(conf.DataFramePath + "/" + id, table + "add.csv"));
            System.IO.File.Delete(Path.Combine(conf.DataFramePath + "/" + id, table + "add.csv"));
            add.Table.RemoveAt(0);
            string content = "";
            foreach (string[] line in add.Table)
            {
                content += string.Join(";", line) + Environment.NewLine;
            }

            System.IO.File.AppendAllText(Path.Combine(conf.DataFramePath + "/" + id, table + ".csv"),content);

            return "sucesso";
        }


        // GET api/values/5

    }
}
