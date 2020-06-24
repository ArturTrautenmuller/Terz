using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz_DataBaseLayer;
using Microsoft.AspNetCore.Http;
using System.IO;
using Newtonsoft.Json;

namespace Terz.Controllers
{
    public class UserController : Controller
    {

        public PartialViewResult UserPage()
        {
            return PartialView();
        }

        public PartialViewResult Report()
        {
            string userId = HttpContext.Session.GetString("User");
            Usuario usuario = new Usuario();
            usuario.Load(userId);
            usuario.LoadReports();
            Models.User.ReportModel reportPageModel = new Models.User.ReportModel();
            reportPageModel.Usuario = usuario;
            return PartialView(reportPageModel);
        }

        public PartialViewResult ReportEditorConfig([FromQuery(Name = "id")] string id)
        {
            Terz_DataBaseLayer.Report report = new Report();
            report.Load(id);
            return PartialView(report);
        }

        public async Task<string> UpdateReportAsync([FromQuery(Name = "id")] string id, [FromQuery(Name = "name")] string name)
        {
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            var file = Request.Form.Files[0];

            var filePath = Path.Combine(conf.ImagePath + "/CapaApp", id + ".jpg");

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            Terz_DataBaseLayer.Report report = new Report();
            report.Id = id;
            report.Titulo = name;
            report.Imagem = Location.serverUrl + "/Terz/CapaApp/" + id + ".jpg";
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
         
                return PartialView("~/Views/Home/Login.cshtml");
            }
       

           
        }

        public PartialViewResult Cadastro()
        {
            string name = Request.Form["Name"].ToString();
            string email = Request.Form["Email"].ToString();
            string senha = Request.Form["Senha"].ToString();

            Usuario usuario = new Usuario();
            usuario.Email = email;
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
    }
}