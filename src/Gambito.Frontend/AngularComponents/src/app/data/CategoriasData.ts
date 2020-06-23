import { Categoria } from '../services/gambito-entities';

export class CategoriasData {
    Datos: Array<Categoria> = [
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
          categoria_nm: 'Fisica Mecanica',
          categoria_ds: 'Descripción de Categoria Fisica mecanica',
          categoria_cd: 'categoria_3',
          tercero_id: 1,
          activo_ind: 1
        },
        {
          categoria_id: 4,
          categoria_nm: 'Matematica Discreta',
          categoria_ds: 'Descripción de Categoria Matematica discreta',
          categoria_cd: 'categoria_4',
          tercero_id: 1,
          activo_ind: 1
        }
      ];

    getData(){
      return this.Datos;
    }
}

