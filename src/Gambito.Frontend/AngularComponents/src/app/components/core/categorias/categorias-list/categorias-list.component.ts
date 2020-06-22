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
  /*animal: string;
  name: string;*/

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

  /*openDialog(): void {
    const dialogRef = this.dialog.open(DialogCategoriaComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.animal = result;
    });
  }*/
}

/*@Component({
  selector: 'app-dialog-categoria',
  templateUrl: 'dialog-categoria.html',
})
export class DialogCategoriaComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogDataView {
  categoria_id: number;
  categoria_nm: string;
  categoria_ds: string;
  categoria_cd: string;
  tercero_id: number;
  activo_ind: number;
}

export interface DialogData {
  animal: string;
  name: string;
}*/
