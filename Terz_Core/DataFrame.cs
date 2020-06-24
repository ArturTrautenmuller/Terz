using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

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
    }

   
}
