import { Component, OnInit, Inject } from '@angular/core';
import {CategoriasServiceService} from '../../../../services/gambito-services';
import {Categoria} from '../../../../services/gambito-entities';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {
  categorias: Array<Categoria> = [];

  constructor(
        private categoriasServiceService: CategoriasServiceService,
        public dialog: MatDialog
      ) { }

  ngOnInit(): void {
    this.categorias = this.categoriasServiceService.GetCategorias();
  }

  getCategorias(nombre: string){
    this.categorias = this.categoriasServiceService.GetCategoriasBy(nombre);
  }
}

