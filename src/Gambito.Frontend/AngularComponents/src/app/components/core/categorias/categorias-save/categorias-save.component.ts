import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Categoria } from 'src/app/services/gambito-entities';

@Component({
  selector: 'app-categorias-save',
  templateUrl: './categorias-save.component.html',
  styleUrls: ['./categorias-save.component.css']
})
export class CategoriasSaveComponent implements OnInit {
  categoria: Categoria;

  constructor(
    public dialogRef: MatDialogRef<CategoriasSaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      data.animal = 'Gato';
      data.name = 'Michu';
    }

  ngOnInit(): void {
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
