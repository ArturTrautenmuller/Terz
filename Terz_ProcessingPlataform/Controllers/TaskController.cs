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
    public class TaskController : Controller
    {
        public PartialViewResult Index()
        {
            string userId = HttpContext.Session.GetString("User");
            Models.Task.TaskView taskView = new Models.Task.TaskView();
            Usuario usuario = new Usuario();

            usuario.Load(userId);
            usuario.LoadTasks();
            taskView.Usuario = usuario;
            return PartialView(taskView);
        }
    }
}