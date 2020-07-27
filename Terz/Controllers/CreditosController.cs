using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Terz_Core;
using Terz_DataBaseLayer;

namespace Terz.Controllers
{
    public class CreditosController : Controller
    {
        public PartialViewResult Index()
        {
            return PartialView();
        }

        public async Task<PartialViewResult> Pagamento()
        {
            Models.Creditos.DadosPagamento dados = new Models.Creditos.DadosPagamento();
            dados.Nome = Request.Form["Nome"].ToString();
            dados.CPF = Request.Form["CPF"].ToString();
            dados.Email = Request.Form["Email"].ToString();
            dados.DDD = Request.Form["DDD"].ToString();
            dados.Fone = Request.Form["Fone"].ToString();
            dados.Qtd = Request.Form["Qtd"].ToString();

            double valor = Models.Creditos.Operation.CalculaValor(Convert.ToInt32(dados.Qtd));
            string userId = HttpContext.Session.GetString("User");
            if(userId != null) {
                Compra compra = new Compra();
                compra.Qtd = dados.Qtd;
                compra.Valor = valor;
                compra.UserId = userId;
                string codRef = compra.Insert();

                PagamentoPagSeguro pagamento = new PagamentoPagSeguro();
                string url = await pagamento.checkoutAsync(dados.Nome,dados.Email,dados.DDD,dados.Fone,dados.CPF,"Créditos Terz",valor.ToString("0.00").Replace(",","."),codRef);
               
                Models.Creditos.PagamentoView pagamentoView = new Models.Creditos.PagamentoView();
                pagamentoView.Url = url;
                return PartialView(pagamentoView);

            }

            return null;
        }
    }
}