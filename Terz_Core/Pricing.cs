using System;
using System.Collections.Generic;
using System.Text;

namespace Terz_Core
{
    public class ExpancaoAtributos
    {
       public int Consumo { get; set; }
        public int Size { get; set; }
    }
    public class Pricing
    {
        public Dictionary<string,ExpancaoAtributos> ExpancaoPricing { get; set; }
        public Pricing()
        {
            this.ExpancaoPricing = new Dictionary<string, ExpancaoAtributos>();
            this.ExpancaoPricing.Add("0", new ExpancaoAtributos() { Consumo = 0, Size = 10 });
            this.ExpancaoPricing.Add("1", new ExpancaoAtributos() {Consumo = 1,Size = 100 });
            this.ExpancaoPricing.Add("2", new ExpancaoAtributos() { Consumo = 2, Size = 250 });
            this.ExpancaoPricing.Add("3", new ExpancaoAtributos() { Consumo = 3, Size = 400 });
            this.ExpancaoPricing.Add("4", new ExpancaoAtributos() { Consumo = 4, Size = 600 });
            this.ExpancaoPricing.Add("5", new ExpancaoAtributos() { Consumo = 5, Size = 800 });
            this.ExpancaoPricing.Add("6", new ExpancaoAtributos() { Consumo = 6, Size = 1000 });


        }
    }
}
