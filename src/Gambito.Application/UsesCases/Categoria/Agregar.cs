using Gambito.Domain;
using Gambito.Domain.Categorias;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Application.UsesCases.Categoria
{
    public class Agregar : IUseCase<AgregarInput, AgregarOutput>
    {
        ICategoriaRepository _CategoriaRepository = null;

        public Agregar(ICategoriaRepository categoriaRepository)
        {
            _CategoriaRepository = categoriaRepository;
        }        

        public AgregarOutput Execute(AgregarInput agregarInput)
        {
            AgregarOutput agregarOutput = new AgregarOutput();
            bool isCategoriaRegistered = false;
            try
            {
                _CategoriaRepository.Add(agregarInput);
                isCategoriaRegistered = _CategoriaRepository.Exist(agregarInput.categoria_id);

                if (isCategoriaRegistered)
                {
                    agregarOutput.Register("Categoria registrada exitosamente !!!", false);
                }
                else
                {
                    agregarOutput.Register("La categoria no fue registrada !!!", true);
                }
            }
            catch(Exception ex)
            {
                agregarOutput.Register(ex.Message, true);
            }            

            return agregarOutput;
        }
    }
}
