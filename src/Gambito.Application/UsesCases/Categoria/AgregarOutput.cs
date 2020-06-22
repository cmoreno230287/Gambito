using Gambito.Application.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Application.UsesCases.Categoria
{
    public class AgregarOutput : BaseOutput
    {
        public AgregarOutput(string message, bool IsError) : base(message, IsError)
        {
        }

        public AgregarOutput() : base()
        {            
        }

        public void Register(string Message, bool IsError)
        {
            this.message = Message;
            this.IsError = IsError;
        }
    }
}
