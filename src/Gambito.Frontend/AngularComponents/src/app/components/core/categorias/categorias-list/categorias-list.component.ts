import { Component, OnInit, Inject } from '@angular/core';
import {CategoriasServiceService} from '../../../../services/gambito-services';
import {Categoria} from '../../../../services/gambito-entities';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriasSaveComponent } from '../categorias-save/categorias-save.component';


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
  openDialog(){
    let dialogRef = this.dialog.open(CategoriasSaveComponent, {
      width: '250px',
      data: {name: 'Firulais', animal: 'Perro'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.categorias = this.categoriasServiceService.GetCategorias();
  }

  getCategorias(nombre: string){
    this.categorias = this.categoriasServiceService.GetCategoriasBy(nombre);
  }
}

