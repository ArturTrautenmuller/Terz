using System;
using Terz_Core;
using Newtonsoft.Json;
using System.IO;
using Terz_DataBaseLayer;

namespace Tester
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            




            /*
            Config config = new Config() {
                Sheets = new System.Collections.Generic.List<Sheet>() {
                    new Sheet() {
                        Id = "123",
                        Order = "1",
                        Filters = new System.Collections.Generic.List<Filter>(){
                            new Filter() {
                                Id = "214",
                                DataFrameName = "main",
                                Dimension = new Dimension(){
                                    Id = "2124",
                                    Field = "field",
                                    Name = "campo" },
                                MultiValue = true, Style = new Style () {
                                    Id = "4124",
                                    Height = "500",
                                    Width = "700",
                                    X = "10",
                                    Y = "10" } } } ,
                        Graphs = new System.Collections.Generic.List<Graph>(){
                            new Graph() {
                                Id = "313",
                                DataFrameName = "main",
                                Dimensions = new System.Collections.Generic.List<Dimension>(){
                                    new Dimension() {
                                        Id = "2124",
                                        Field = "field",
                                        Name = "campo"} },
                                Measures = new System.Collections.Generic.List<Measure>() {
                                    new Measure() {
                                        Id = "2231",
                                        Expresion = "sum(qtde)",
                                        Name = "Quantidade" } },
                                ObjectType = "bar",
                                Style = new Style(){
                                    Id = "4144",
                                    Height = "500",
                                    Width = "700",
                                    X = "10",
                                    Y = "550"  }  } },
                        Indicators =  new System.Collections.Generic.List<Indicator>(){
                            new Indicator() {
                                Id = "99898",
                                DataFrameName = "main",
                                Measure = new Measure(){
                                    Id = "2261",
                                    Expresion = "sum(qtde)",
                                    Name = "Quantidade" },
                                Style = new Style(){
                                    Id = "4744",
                                    Height = "60",
                                    Width = "170",
                                    X = "10",
                                    Y = "1150"  }  } } } } };


            string json_text = JsonConvert.SerializeObject(config, Formatting.Indented);
            File.WriteAllText(@"C:\TERZ\Folder\Config\123456\config.json", json_text);


            DataFrame dataFrame = new DataFrame();
            dataFrame.Load(@"C:\TERZ\Folder\DataFrame\123456\main.csv");

            string df = JsonConvert.SerializeObject(dataFrame, Formatting.Indented);
            File.WriteAllText(@"C:\TERZ\Folder\DataFrame\123456\df.json", df);

            */


        }
    }
}
