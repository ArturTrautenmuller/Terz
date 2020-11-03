using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Terz_Query_Plataform.Controllers
{
    public class DataSetController : Controller
    {
        public PartialViewResult Index([FromQuery(Name = "Id")] string Id)
        {

            return PartialView();
        }
    }
}