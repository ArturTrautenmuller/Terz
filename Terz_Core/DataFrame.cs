using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;

namespace Terz_Core
{
    public class DataFrame
    {
       
        public string Name { get; set; }
        public List<string[]> Table { get; set; }
        public string Path { get; set; }

        public void Load(string filePath)
        {
            this.Name = System.IO.Path.GetFileNameWithoutExtension(filePath);
            this.Table = new List<string[]>();
            var lines = System.IO.File.ReadAllLines(filePath);
            foreach (string line in lines)
                this.Table.Add(line.Split(','));


        }

        public void LoadFiltered(string filePath,List<OdagField> odagFields,List<OdagValues> odagValues)
        {

            List<OdagFilteredValues> odagFilteredValues = new List<OdagFilteredValues>();
            foreach(OdagField odagField in odagFields)
            {
                OdagFilteredValues odagFiltered = new OdagFilteredValues();
                odagFiltered.Field = odagField.Field;
                odagFiltered.Values = odagValues.FirstOrDefault(v => v.Name == odagField.Name).Values;
                odagFilteredValues.Add(odagFiltered);
            }

            this.Name = System.IO.Path.GetFileNameWithoutExtension(filePath);
            this.Table = new List<string[]>();
            var lines = System.IO.File.ReadAllLines(filePath);
            List<string> sLines = lines.ToList();

            string[] header = sLines[0].Split(',');
            this.Table.Add(header);

            for(int i = 1; i < sLines.Count ;i++)
            {
                string[] row = sLines[i].Split(',');
                if (IncludeRow(header.ToList(), row.ToList(), odagFilteredValues))
                {
                    this.Table.Add(row);
                }
                
            }


        }

        public bool IncludeRow(List<string> header,List<string> row, List<OdagFilteredValues> odagFilterdValues)
        {
            
            foreach(OdagFilteredValues odagFiltered in odagFilterdValues)
            {
                int pos = header.IndexOf(odagFiltered.Field);
                if (!odagFiltered.Values.Contains(row[pos]))
                {
                    return false;
                }
            }

            return true;
        }

        public List<string> getColumn(string ColumnName)
        {
            List<string> column = new List<string>();
            string[] header = this.Table[0];
            int pos = header.ToList<string>().IndexOf(ColumnName);
            for (int i = 1; i < this.Table.Count; i++)
            {
                column.Add(this.Table[i][pos]);
            }


            return column;
        }

        public List<string> getDistincColumnValues(List<string> Column)
        {
            return Column.Distinct().ToList();
        }


        public DataFrame ApplyFilter(QueryContent queryContent)
        {
            List<string[]> filterdTable = new List<string[]>();
            filterdTable.Add(this.Table[0]);
            for (int i = 1; i < this.Table.Count; i++)
            {
                if (ConsiderRow(this.Table[i], queryContent))
                {
                    filterdTable.Add(this.Table[i]);
                }
            }

            DataFrame dataFrame = new DataFrame();
            dataFrame.Name = this.Name;
            dataFrame.Table = filterdTable;
            return dataFrame;
        }

        public bool ConsiderRow(string[] row, QueryContent queryContent)
        {
            string[] header = this.Table[0];

            foreach (Parameter parameter in queryContent.Parameters.Where(p => p.Values.Count > 0))
            {
                int pos = header.ToList<string>().IndexOf(parameter.Field);
                if(!Array.Exists(parameter.Values.ToArray(), element => element == row[pos])){
                    return false;
                }
            }

            return true;
        }

        public DataFrame Select(List<string> fields)
        {
            List<string[]> selectedDataFrame = new List<string[]>();
            selectedDataFrame.Add(fields.ToArray());
            string[] header = this.Table[0];

            for (int i = 1; i < this.Table.Count; i++)
            {
                List<string> row = new List<string>();
                foreach(string field in fields)
                {
                    int pos = header.ToList<string>().IndexOf(field);
                    row.Add(this.Table[i][pos]);
                }

                selectedDataFrame.Add(row.ToArray());
            }



            DataFrame dataFrame = new DataFrame();
            dataFrame.Name = this.Name;
            dataFrame.Table = selectedDataFrame;
            return dataFrame;
        }
    }

   
}
