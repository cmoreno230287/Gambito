import { Injectable } from '@angular/core';
import {Categoria} from '../entities/categoria';

@Injectable()
export class CategoriasServiceService {
  private categorias: Categoria[] = [
    {
      categoria_id: 1,
      categoria_nm: 'Fisica Electrica',
      categoria_ds: 'Descripción de categoria Fisica electrica',
      categoria_cd: 'categoria_1',
      tercero_id: 1,
      activo_ind: 1
   },
   {
      categoria_id: 2,
      categoria_nm: 'Estadistica Descriptiva',
      categoria_ds: 'Descripción de Categoria Estadistica descriptiva',
      categoria_cd: 'categoria_2',
      tercero_id: 1,
      activo_ind: 1
   },
    {
      categoria_id: 3,
      categoria_nm: 'Categoria 3',
      categoria_ds: 'Descripción de Categoria 3',
      categoria_cd: 'categoria_3',
      tercero_id: 1,
      activo_ind: 1
    },
    {
      categoria_id: 3,
      categoria_nm: 'Categoria 4',
      categoria_ds: 'Descripción de Categoria 4',
      categoria_cd: 'categoria_4',
      tercero_id: 1,
      activo_ind: 1
    }
  ];
  constructor() { }

   GetCategorias() {
    return this.categorias;
  }

  GetCategoriasBy(nombre: string){
    return this.categorias.filter(e => e.categoria_nm.startsWith(nombre));
  }

  add(categoria: Categoria) {
    const jsonobject = JSON.stringify(categoria);
    localStorage.setItem('categorias', jsonobject);
  }
}
