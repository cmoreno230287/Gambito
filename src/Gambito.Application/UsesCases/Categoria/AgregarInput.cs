using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gambito.Domain.Categorias;

namespace Gambito.Application.UsesCases.Categoria
{
    public class AgregarInput : ICategoria
    {
        public int categoria_id { get; set; }
        public string categoria_cd { get; set; }
        public string categoria_nm { get; set; }
        public int tercero_id { get; set; }
        public bool activo_ind { get; set; }

        public AgregarInput(int categoria_id, string categoria_cd, string categoria_nm, int tercero_id, bool activo_ind)
        {
            this.categoria_id = categoria_id;
            this.categoria_cd = categoria_cd;
            this.categoria_nm = categoria_nm;
            this.tercero_id = tercero_id;
            this.activo_ind = activo_ind;
        }
    }
}
