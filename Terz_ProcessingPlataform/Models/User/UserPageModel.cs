using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Terz_DataBaseLayer;

namespace Terz_ProcessingPlataform.Models.User
{
    public class UserPageModel
    {
       public Usuario Usuario { get; set; }
       public List<Terz_DataBaseLayer.Processo> Processos { get; set; }

    }
}
