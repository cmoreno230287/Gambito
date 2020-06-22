using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Application.Common
{
    public class BaseOutput
    {
        public string message { get; set; }
        public bool IsError { get; set; }

        public BaseOutput(string message, bool IsError)
        {
            this.message = message;
            this.IsError = IsError;
        }
        public BaseOutput()
        {
            this.message = "";
            this.IsError = false;
        }

    }
}
