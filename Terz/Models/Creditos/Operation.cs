using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Terz.Models.Creditos
{
    public static class Operation
    {
        public static double CalculaValor(int Qtd)
        {
            double TaxaFixa = 0.40;
            double ValorUnitario = 0.05;
            return TaxaFixa + Qtd * ValorUnitario;
        }
    }
}
