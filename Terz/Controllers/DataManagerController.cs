using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Terz.Controllers
{
    public class DataManagerController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
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
                dataFrameInfos.Add(dataFrameInfo);
            }
            dataManagerView.DataFrameInfos = dataFrameInfos;
            return PartialView(dataManagerView);
        }

        public async Task<string> UploadDataFrame([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            var files = Request.Form.Files;
            foreach (var file in files)
            {
                var filePath = Path.Combine(conf.DataFramePath + "/" + id, file.FileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
            }
            return "ok";
        }

        public string RenameDataFrame([FromQuery(Name = "id")] string id, [FromQuery(Name = "name")] string name, [FromQuery(Name = "newname")] string newName)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            var oldFile = Path.Combine(conf.DataFramePath + "/" + id, name+".csv");
            var newFile = Path.Combine(conf.DataFramePath + "/" + id, newName + ".csv");
            System.IO.File.Move(oldFile, newFile);
            return "ok";
        }

        public string DeleteDataFrame([FromQuery(Name = "id")] string id, [FromQuery(Name = "name")] string name)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            var file = Path.Combine(conf.DataFramePath + "/" + id, name + ".csv");
            System.IO.File.Delete(file);
            return "ok";
        }
    }
}