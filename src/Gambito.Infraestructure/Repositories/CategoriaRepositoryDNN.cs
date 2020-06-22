using DotNetNuke.Data;
using Gambito.Domain.Categorias;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Infraestructure.Repositories
{
    public class CategoriaRepositoryDNN : ICategoriaRepository
    {
        IDataContext _DnnDataContext = null;
        IRepository<Entities.Categoria> _Repository = null;
        public CategoriaRepositoryDNN()
        {
            _DnnDataContext = DataContext.Instance();
            _Repository = _DnnDataContext.GetRepository<Entities.Categoria>();
        }
        public void Add(ICategoria categoria)
        {
            Entities.Categoria _categoria = new Entities.Categoria(
                                                                    categoria.categoria_id,
                                                                    categoria.categoria_cd,
                                                                    categoria.categoria_nm,
                                                                    categoria.tercero_id,
                                                                    categoria.activo_ind
                                                                  );
            _Repository.Insert(_categoria);
        }

        public bool Exist(int categoria_id)
        {
            /*ICategoria categoria = _Repository.GetById(categoria_id);
            bool iscategoriaregistered = (categoria.categoria_id == categoria_id) ? true : false;
            return iscategoriaregistered;*/
            throw new Exception("");
        }

        public IEnumerable<ICategoria> GetAll()
        {
            /* IEnumerable<ICategoria> categorias = null;
             categorias = _Repository.Get();

             return categorias;*/
            throw new Exception("");
        }

        public ICategoria GetBy(int categoria_id)
        {
            /*Entities.Categoria categoria = _Repository.GetById(categoria_id);
            return categoria;*/
            throw new Exception("");
        }
        
        public void Update(ICategoria categoria)
        {
            //_Repository.Update(categoria);
        }
    }
}
