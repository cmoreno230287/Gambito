using Gambito.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gambito.Application.UsesCases
{
    public interface IUseCase<in TUseCaseInput, TUseCaseOutput>
    {
        TUseCaseOutput Execute(TUseCaseInput UseCaseInput);
    }
}
