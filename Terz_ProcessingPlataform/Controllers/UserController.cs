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
    public class UserController : Controller
    {

        public PartialViewResult UserPage()
        {
            string userId = HttpContext.Session.GetString("User");
            Usuario usuario = new Usuario();
            usuario.Load(userId);
            usuario.LoadReports();
            usuario.LoadProcessos();
            Models.User.UserPageModel userPageModel = new Models.User.UserPageModel();
            userPageModel.Usuario = usuario;
            
            


            return PartialView(userPageModel);
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
                  usuario.LoadProcessos();
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

       
    }
}