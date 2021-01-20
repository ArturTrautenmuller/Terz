using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Terz_DataBaseLayer;

namespace Terz_Core
{
    public static class Query
    {
        public static void ProcessDataFrames(List<string> DataFrames, string DataFarmePath,string QueryConfigPath)
        {
            if (!File.Exists(Path.Combine(QueryConfigPath, "config.json"))) return;

            string configText = System.IO.File.ReadAllText(Path.Combine(QueryConfigPath,"config.json"));
            QueryConfig queryConfig = JsonConvert.DeserializeObject<QueryConfig>(configText);

            foreach(string DataFrame in DataFrames)
            {
                int pos = queryConfig.QuerySheets.FindIndex(s => s.DataFrame == DataFrame);
                if(pos >= 0)
                {
                    DataFrame df = new DataFrame();
                    df.Load(Path.Combine(DataFarmePath, DataFrame + ".csv"));
                    for(int i = 0; i < queryConfig.QuerySheets[pos].QueryFilterValues.Count; i++)
                    {
                        string filter = queryConfig.QuerySheets[pos].QueryFilterValues[i].Filter;
                        List<string> values = df.getDistincColumnValues(df.getColumn(filter));
                        queryConfig.QuerySheets[pos].QueryFilterValues[i].Values = values;
                    }

                }

            }

            string json_text = JsonConvert.SerializeObject(queryConfig, Formatting.Indented);
            System.IO.File.WriteAllText(Path.Combine(QueryConfigPath, "config.json"), json_text);
        }
    }
}
