using DotNetNuke.ComponentModel.DataAnnotations;
using Gambito.Domain.Categorias;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Gambito.Infraestructure.Entities
{
    [TableName("Categoria")]
    //setup the primary key for table
    [PrimaryKey("categoria_id", AutoIncrement = true)]
    public class Categoria //: ICategoria
    {
        [Column]
        public int categoria_id { get; set; }

        [Column]
        public string categoria_cd { get; set; }

        [Column]
        public string categoria_nm { get; set; }

        [Column]
        public int tercero_id { get; set; }

        [Column]
        public bool activo_ind { get; set; }

        public Categoria(int categoria_id, string categoria_cd, string categoria_nm, int tercero_id, bool activo_ind)
        {
            this.categoria_id = categoria_id;
            this.categoria_cd = categoria_cd;
            this.categoria_nm = categoria_nm;
            this.tercero_id = tercero_id;
            this.activo_ind = activo_ind;
        }
        public Categoria() { }
    }
}
