using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Terz_DataBaseLayer;

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

            var file = Request.Form.Files[0];
           
            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            var filePath = Path.Combine(conf.DataFramePath + "/"+id,file.FileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            return "DataFrame importado com sucesso";
        }

        // GET api/values/5
       
    }
}
