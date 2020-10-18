using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz_DataBaseLayer;
using Microsoft.AspNetCore.Http;
using System.IO;
using Newtonsoft.Json;
using System.Security.Cryptography.Pkcs;
namespace Terz_ProcessingPlataform.Controllers
{
    public class ProcessoController : Controller
    {

       public PartialViewResult Index([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Models.Processo.ProcessoView processoView = new Models.Processo.ProcessoView();
            Terz_DataBaseLayer.Processo processo = new Processo();
            processo.Load(id);

            processo.LoadScripts(conf.ProcessoPath + "/" + id);

            processoView.Processo = processo;
            return PartialView(processoView);
        }

        public Processo GetProcesso([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");
            if (!Security.CheckProcessoPermission(userId, id))
            {
                return null;
            }
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Terz_DataBaseLayer.Processo processo = new Processo();
            processo.Load(id);

            processo.LoadScripts(conf.ProcessoPath + "/" + id);

            return processo;
        }

        public string SaveProcesso(Processo processo)
        {
            string userId = HttpContext.Session.GetString("User");
            if (!Security.CheckProcessoPermission(userId, processo.Id))
            {
                return null;
            }

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            foreach(Script script in processo.Scripts)
            {
                System.IO.File.WriteAllText(conf.ProcessoPath+"/"+processo.Id+"/"+script.Nome+".py",script.Content);
            }


            return "Salvo com sucesso!";
        }

        public PartialViewResult AddApp()
        {
            return PartialView();
        }

        public string CreateApp([FromQuery(Name = "Nome")] string Nome)
        {
            string userId = HttpContext.Session.GetString("User");
            Processo processo = new Processo();
            processo.UserId = userId;
            processo.Nome = Nome;
            processo.Insert();

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            Directory.CreateDirectory(conf.ProcessoPath + "/" + processo.Id);
            System.IO.File.WriteAllText(conf.ProcessoPath + "/" + processo.Id + "/main.py", "");


            return "ok";
        }

        public string ExecuteProcesso([FromQuery(Name = "id")] string Id)
        {
            string userId = HttpContext.Session.GetString("User");
            if (!Security.CheckProcessoPermission(userId, Id))
            {
                return null;
            }

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Terz_ProcessingExecuter.Conf conf = JsonConvert.DeserializeObject<Terz_ProcessingExecuter.Conf>(text);

            string result = Terz_ProcessingExecuter.Runner.Run(Id,"0",conf,"0");

            return result;

        }


    }
}