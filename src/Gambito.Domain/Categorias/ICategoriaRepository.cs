using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Domain.Categorias
{
    public interface ICategoriaRepository
    {
        ICategoria GetBy(int categoria_id);

        bool Exist(int categoria_id);

        IEnumerable<ICategoria> GetAll();

        void Add(ICategoria categoria);

        void Update(ICategoria categoria);
    }
}
