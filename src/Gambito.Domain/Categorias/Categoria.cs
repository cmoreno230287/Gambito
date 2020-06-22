using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Domain.Categorias
{
    public abstract class Categoria : ICategoria
    {
        public int categoria_id { get; set; }
        public string categoria_cd { get; set; }
        public string categoria_nm { get; set; }
        public int tercero_id { get; set; }
        public bool activo_ind { get; set; }
    }
}
