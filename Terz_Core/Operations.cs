using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Terz_Core
{
   public static class Operations
    {
        public static long getFolderSize(string Path)
        {
            DirectoryInfo info = new DirectoryInfo(Path);
            long totalSize = info.EnumerateFiles().Sum(file => file.Length);
            return totalSize;
        }

        public static long getFilesSize(IFormFileCollection files)
        {
            
            long totalSize = files.Sum(file => file.Length);
            return totalSize;
        }

        public static long getRepetedFilesSize(IFormFileCollection files,string Path)
        {
            long totalSize = 0;
            DirectoryInfo info = new DirectoryInfo(Path);
            foreach(FileInfo fileInfo in info.EnumerateFiles())
            {
                foreach (IFormFile file in files)
                {
                    if(file.FileName == fileInfo.Name)
                    {
                        totalSize += fileInfo.Length;
                    }
                }
            }
            return totalSize;
        }

    }
}
