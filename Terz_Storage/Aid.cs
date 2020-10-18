using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Terz_Storage
{
    public static class Aid
    {
        public static string getBar()
        {
#if DEBUG
            return "\\";
#else
            return "/";
#endif
        }
    }
}
