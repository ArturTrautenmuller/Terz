using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Terz.Models;

namespace Terz.Controllers
{
    public class HomeController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "category")] string category)
        {
            Models.Home.HomeView homeView = new Models.Home.HomeView();
            Terz_DataBaseLayer.ReportCollection reportCollection = new Terz_DataBaseLayer.ReportCollection();
            if (category == "0" || category == null)
            {
                reportCollection.LoadN(50);
            }
            else
            {
                reportCollection.LoadN(50,Convert.ToInt32(category));
            }
            homeView.Reports = reportCollection;

            Terz_DataBaseLayer.CategoryCollection categoryCollection = new Terz_DataBaseLayer.CategoryCollection();
            categoryCollection.Load();
            homeView.Categories = categoryCollection;

            return PartialView(homeView);
        }

        public PartialViewResult Login()
        {
            return PartialView();
        }

        public PartialViewResult Cadastro()
        {
            return PartialView();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
