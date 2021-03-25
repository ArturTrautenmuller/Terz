using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Terz_Core;

namespace Terz.Controllers
{
    public class OdagController : Controller
    {
        public string ProcessOdag([FromQuery(Name = "id")] string id, Odag odag)
        {

            string text = System.IO.File.ReadAllText(Location.ConfLocation);
            Conf conf = JsonConvert.DeserializeObject<Conf>(text);
            if (!Directory.Exists(Path.Combine(conf.OdagConfigPath, id)))
            {
                Directory.CreateDirectory(Path.Combine(conf.OdagConfigPath, id));
            }

            OdagValuesCollection odagValuesCollection = new OdagValuesCollection();
          


            foreach(OdagField odagField in odag.OdagFields)
            {
                OdagValues odagValues = new OdagValues(odagField.Name);

                foreach(string df in odagField.DataFrames)
                {
                    DataFrame dataFrame = new DataFrame();
                    dataFrame.Load(Path.Combine(conf.DataFramePath,id,df+".csv"));
                    int fieldPos = dataFrame.Table[0].ToList().IndexOf(odagField.Field);

                    if (fieldPos < 0) return $"Erro: Campo {odagField.Field} não localizado em {df}";

                    for(int i = 1; i < dataFrame.Table.Count; i++)
                    {
                        string value = dataFrame.Table[i][fieldPos];
                        if (!odagValues.Values.Contains(value))
                        {
                            odagValues.Values.Add(value);
                        }
                    }
                }

                odagValuesCollection.OdagValues.Add(odagValues);
                
            }

            string json_text = JsonConvert.SerializeObject(odagValuesCollection, Formatting.Indented);
            System.IO.File.WriteAllText(Path.Combine(conf.OdagConfigPath,id,"config.json"), json_text);


            return "Odag processado com sucesso";
        }
    }
}