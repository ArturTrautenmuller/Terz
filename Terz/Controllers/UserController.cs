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
namespace Terz.Controllers
{
    public class UserController : Controller
    {

        public PartialViewResult UserPage()
        {
            string userId = HttpContext.Session.GetString("User");
            Usuario usuario = new Usuario();
            usuario.Load(userId);
            usuario.LoadReports();
            Models.User.UserPageModel userPageModel = new Models.User.UserPageModel();
            userPageModel.Usuario = usuario;
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            userPageModel.Enterprise = conf.Enterprise;



            return PartialView(userPageModel);
        }
        public async Task<IActionResult> ExportApp([FromQuery(Name = "id")] string id)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            string configFile = conf.ConfigPath + "/" + id + "/config.json";

            var memory = new MemoryStream();
            using (var stream = new FileStream(configFile, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            return File(memory, "text/plain",id+".tcf");
        }

        public PartialViewResult Report()
        {
            string userId = HttpContext.Session.GetString("User");
            Usuario usuario = new Usuario();
            usuario.Load(userId);
            usuario.LoadReports();
            usuario.Reports.Reverse();
            Models.User.ReportModel reportPageModel = new Models.User.ReportModel();
            reportPageModel.Usuario = usuario;

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);

            reportPageModel.Enterprise = conf.Enterprise;
            return PartialView(reportPageModel);
        }

        public string DeleteReport([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");
            if (userId == null) return "no permisson";

            Report report = new Report();
            report.Delete(id);
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            string configFolder = conf.ConfigPath + "/" + id;
            Directory.Delete(configFolder, true);

            return "o relatório foi excluido!";
           
        }

        public PartialViewResult Perfil()
        {
            string userId = HttpContext.Session.GetString("User");
            Usuario usuario = new Usuario();
            usuario.Load(userId);
            usuario.LoadReports();
            Models.User.PerfilModel perfilModel = new Models.User.PerfilModel();
            perfilModel.Usuario = usuario;

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            perfilModel.Enterprise = conf.Enterprise;

            return PartialView(perfilModel);
        }

        public PartialViewResult ReportEditorConfig([FromQuery(Name = "id")] string id)
        {
            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            return PartialView(report);
        }

        public string UpdateProfile(Usuario usuario)
        {
            
            usuario.Id = HttpContext.Session.GetString("User");
            usuario.Update();
            return "ok";
           
            
        }

        public async Task<string> UpdateProfileFoto()
        {
            Usuario usuario = new Usuario();
            usuario.Id = HttpContext.Session.GetString("User");
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            var file = Request.Form.Files[0];

            var filePath = Path.Combine(conf.ImagePath + "/User", usuario.Id + ".jpg");

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            usuario.Foto = Location.serverUrl + "/User/" + usuario.Id + ".jpg";
            usuario.UpdateFoto();

            return "ok";


        }

        public async Task<string> UpdateReportAsync([FromQuery(Name = "id")] string id, [FromQuery(Name = "name")] string name)
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
            Terz_DataBaseLayer.Report report = new Report();

            var form = Request.Form.Files;
            if (form.Count > 0)
            {
                var file = form[0];
                var filePath = Path.Combine(conf.ImagePath + "/CapaApp", id + ".jpg");

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                report.Imagem = Location.serverUrl + "/CapaApp/" + id + ".jpg";
            }
            
            report.Id = id;
            report.Titulo = name;
           
            report.Update();

            return "ok";
        }

        public PartialViewResult AddReport()
        {
            Models.Home.HomeView homeView = new Models.Home.HomeView();
            Terz_DataBaseLayer.CategoryCollection categoryCollection = new Terz_DataBaseLayer.CategoryCollection();
            categoryCollection.Load();
            homeView.Categories = categoryCollection;
            return PartialView(homeView);
        }

        public PartialViewResult ImportReport()
        {
            Models.Home.HomeView homeView = new Models.Home.HomeView();
            Terz_DataBaseLayer.CategoryCollection categoryCollection = new Terz_DataBaseLayer.CategoryCollection();
            categoryCollection.Load();
            homeView.Categories = categoryCollection;
            return PartialView(homeView);
        }

        public PartialViewResult GerenciarAcesso([FromQuery(Name = "id")] string id)
        {
            string userId = HttpContext.Session.GetString("User");

            if (userId == null || userId == "")
            {
                return null;
            }
            if (!Security.CheckReportPermission(userId, id))
            {
                return null;
            }

            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            report.GetUsuariosAutorizados();
            return PartialView(report);
        }

        public string AddAcesso([FromQuery(Name = "id")] string id, [FromQuery(Name = "email")] string email)
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

            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            report.ConcederAcesso(email);



            return "sucesso";
        }

        public string RemoveAcesso([FromQuery(Name = "id")] string id, [FromQuery(Name = "email")] string email)
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

            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            report.RemoverAcesso(email);



            return "sucesso";
        }

        public string SetPrivado([FromQuery(Name = "id")] string id, [FromQuery(Name = "privado")] string privado)
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

            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            report.SetPrivado(privado);



            return "sucesso";
        }


        public PartialViewResult Authentication()
        {
            string email = Request.Form["Email"].ToString();
            string senha = Request.Form["Senha"].ToString();

            Usuario usuario = new Usuario();
            usuario.Auth(email, senha);

            if(usuario.Id != null)
            {
                usuario.LoadReports();
                Models.User.UserPageModel userPageModel = new Models.User.UserPageModel();
                userPageModel.Usuario = usuario;
                HttpContext.Session.SetString("User", usuario.Id);
                return PartialView("~/Views/User/UserPage.cshtml",userPageModel);
            }
            else
            {
                Terz.Models.Home.LoginView loginView = new Models.Home.LoginView();
                loginView.IncorretPassword = true;
                return PartialView("~/Views/Home/Login.cshtml",loginView);
            }
       

           
        }

        public PartialViewResult Cadastro()
        {
            string name = Request.Form["Name"].ToString();
            string email = Request.Form["Email"].ToString();
            string senha = Request.Form["Senha"].ToString();

            Usuario usuario = new Usuario();
            usuario.Email = email;
            usuario.Nome = name;
            usuario.Senha = senha;
            if (!usuario.Existis())
            {
                usuario.Insert();
                usuario.Auth(email, senha);
                usuario.LoadReports();
                Models.User.UserPageModel userPageModel = new Models.User.UserPageModel();
                userPageModel.Usuario = usuario;
                HttpContext.Session.SetString("User", usuario.Id);
                return PartialView("~/Views/User/UserPage.cshtml", userPageModel);
            }

            else
            {
                return PartialView("~/Views/Home/Cadastro.cshtml");
            }

        }

        public string AtivarReport([FromQuery(Name = "id")] string id)
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

            Usuario usuario = new Usuario();
            usuario.Load(userId);
            if(usuario.Creditos == 0)
            {
                return "Sem Créditos Suficientes";
            }

            Report report = new Report();
            report.Load(id);
            report.Ativo = 1;
            report.setAtivo();

            return "Agora seu relatório está disponivel para qualquer pessoa";
        }

        public string DesativarReport([FromQuery(Name = "id")] string id)
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

           

            Report report = new Report();
            report.Load(id);
            report.Ativo = 0; 
            report.setAtivo();

            return "Relatório desativado";
        }
    }
}