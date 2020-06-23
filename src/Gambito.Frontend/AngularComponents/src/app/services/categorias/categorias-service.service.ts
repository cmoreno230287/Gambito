import { Injectable } from '@angular/core';
import {Categoria} from '../entities/categoria';
import { LocalRepository } from 'src/app/repositories/LocaRepository';

@Injectable()
export class CategoriasServiceService {
  private localRepository: LocalRepository;
  private categorias: Categoria[];
  private keyRepository = 'categorias';

  constructor() {
    this.localRepository = new LocalRepository();
    this.localRepository.loadFakeData(this.keyRepository);
   }

   GetCategorias() {
    const jsonstring: string = this.localRepository.get(this.keyRepository);
    this.categorias = JSON.parse(jsonstring);
    return this.categorias;
  }

  GetCategoriasBy(nombre: string){
    const jsonstring: string = this.localRepository.get(this.keyRepository);
    this.categorias = JSON.parse(jsonstring);
    return this.categorias.filter(e => e.categoria_nm.startsWith(nombre));
  }

  addCategoria(categoria: Categoria) {
    console.log(categoria);

    this.localRepository.add(this.keyRepository, categoria);
  }
}
