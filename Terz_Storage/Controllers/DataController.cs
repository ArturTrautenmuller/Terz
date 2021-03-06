﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Terz_DataBaseLayer;
using Terz_Core;

namespace Terz_Storage.Controllers
{
    
    [ApiController]
    public class DataController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [Route("storage/[controller]/{id}/UploadCsvFile")]
        public async Task<string> UploadCsvFile(string id)
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
                return "permissão negada";
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            var file = Request.Form.Files[0];


            
            if(!System.IO.Directory.Exists(conf.DataFramePath + Aid.getBar() + id))
            {
                System.IO.Directory.CreateDirectory(conf.DataFramePath + Aid.getBar() + id);
            }

            var filePath = Path.Combine(conf.DataFramePath + Aid.getBar()+id,file.FileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }


            return "DataFrame importado com sucesso";
        }

        [HttpGet]
        [Route("storage/[controller]/getDataFrame/{id}/{dataframe}")]
        public DataFrame getDataFrame(string id,string dataframe)
        {
            string email = Request.Form["email"].ToString();
            string password = Request.Form["password"].ToString();

            Usuario usuario = new Usuario();
            usuario.Auth(email, password);

            if (usuario.Id == null)
            {
                return null;
            }

            if (!Security.CheckReportPermission(usuario.Id, id))
            {
                return null;
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

         


            var filePath = Path.Combine(conf.DataFramePath + Aid.getBar()+ id,dataframe + ".csv");
            DataFrame dataFrame = new DataFrame();
            dataFrame.Load(filePath);

            
            return dataFrame;
        }

        [HttpGet]
        [Route("storage/[controller]/getDataFrame/{id}")]
        public List<DataFrame> getAllDataFrames(string id)
        {
            string email = Request.Form["email"].ToString();
            string password = Request.Form["password"].ToString();

            Usuario usuario = new Usuario();
            usuario.Auth(email, password);

            if (usuario.Id == null)
            {
                return null;
            }

            if(!Security.CheckReportPermission(usuario.Id,id))
            {
                return null;
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);




            List<DataFrame> dataFrames = new List<DataFrame>();
            string[] df_files = System.IO.Directory.GetFiles(conf.DataFramePath + Aid.getBar() + id);
            foreach (string df in df_files)
            {
                DataFrame dataFrame = new DataFrame();
                dataFrame.Load(df);
                dataFrames.Add(dataFrame);
            }


            return dataFrames;
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
                return "permissão negada";
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            string contentText = "";
            foreach(string[] row in dataFrame.Table)
            {
                contentText += string.Join(",", row) + Environment.NewLine;
            }

            var filePath = Path.Combine(conf.DataFramePath +Aid.getBar() + id, dataFrame.Name + ".csv");
            System.IO.File.WriteAllText(filePath, contentText);




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



        // GET api/values/5

    }
}
