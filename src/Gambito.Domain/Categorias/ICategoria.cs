using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Domain.Categorias
{
    public interface ICategoria
    {
        int categoria_id { get; set; }
        string categoria_cd { get; set; }
        string categoria_nm { get; set; }
        int tercero_id { get; set; }
        bool activo_ind { get; set; }
    }
}
