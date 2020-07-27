using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;

namespace Terz_Core
{
    public class PagamentoPagSeguro
    {
        protected HttpClient client;
        protected string Email;
        protected string PagSeguroToken;
        protected string Session;

        public PagamentoPagSeguro()
        {
            this.client = new HttpClient();
            this.Email = "arturtmuller13@gmail.com";
            this.PagSeguroToken = "34B6B872ED024F838E1BE88ECDE0F2A6";

        }

        public async Task<string> checkoutAsync(string nome, string email, string ddd, string fone, string cpf, string produto, string valor, string codref)
        {
            Checkout.Checkout checkout = new Checkout.Checkout();
            checkout.Sender = new Checkout.Sender() { Name = nome, Email = email };
            checkout.Sender.Phone = new Checkout.Phone() { AreaCode = ddd, Number = fone };
            checkout.Sender.Documents = new Checkout.Documents() { Document = new Checkout.Document() { Tipo = "CPF", Value = cpf } };
            checkout.Currency = "BRL";
            checkout.Items = new Checkout.Items() { Item = new Checkout.Item() { Id = "0001", Description = produto, Quantity = "1", Amount = valor, Weight = "10", ShippingCost = "0.00" } };
            checkout.RedirectURL = "http://unime.site/admin";
            checkout.ExtraAmount = "0.00";
            checkout.Reference = codref;
            checkout.Shipping = new Checkout.Shipping() { AddressRequired = "false", Tipo = "1", Cost = "0.00" };
            checkout.Timeout = "2880";
            checkout.MaxAge = "999999999";
            checkout.MaxUses = "999";
            checkout.Receiver = new Checkout.Receiver() { Email = this.Email };
            checkout.EnableRecovery = "false";

            XmlSerializer xsSubmit = new XmlSerializer(typeof(Checkout.Checkout));
            var xml = "";

            using (var sww = new StringWriter())
            {
                using (XmlWriter writer = XmlWriter.Create(sww))
                {
                    xsSubmit.Serialize(writer, checkout);
                    xml = sww.ToString(); // Your XML
                }
            }
            string body = xml.Replace("encoding=\"utf-16\"", "");

            string URL = "https://ws.sandbox.pagseguro.uol.com.br/v2/checkout?email=" + this.Email + "&token=" + this.PagSeguroToken;

            var httpContent = new StringContent(body, Encoding.UTF8, "application/xml");
            string respone = await client.PostAsync(URL, httpContent).Result.Content.ReadAsStringAsync();
           

            Checkout.Checkout token = new Checkout.Checkout();
            try
            {
                var strReader = new StringReader(respone);
                var serializer = new XmlSerializer(typeof(Checkout.Checkout));
                var xmlReader = new XmlTextReader(strReader);
                token = (Checkout.Checkout)serializer.Deserialize(xmlReader);
            }
            catch (Exception exp)
            {
                Console.WriteLine(exp.Message);
            }

            string RedirectURL = "https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=" + token.Code;

            return RedirectURL;




        }

        public async Task<bool> VerificaPagamento(int codRef)
        {
            string URL = "https://ws.sandbox.pagseguro.uol.com.br/v2/transactions?email=" + Email + "&token=" + PagSeguroToken + "&reference=" + codRef;
            string respone = await client.GetAsync(URL).Result.Content.ReadAsStringAsync();
            Consulta.TransactionSearchResult result = new Consulta.TransactionSearchResult();
            try
            {
                var strReader = new StringReader(respone);
                var serializer = new XmlSerializer(typeof(Consulta.TransactionSearchResult));
                var xmlReader = new XmlTextReader(strReader);
                result = (Consulta.TransactionSearchResult)serializer.Deserialize(xmlReader);

                Consulta.Transaction transaction = result.Transactions.Transaction;
                if (transaction.Status == "3" || transaction.Status == "4") return true;


            }
            catch (Exception exp)
            {
                Console.WriteLine("Erro em Consulta do PagSeguro");
                Console.WriteLine(exp.Message);
                return false;
            }

            return false;

        }
    }
}
