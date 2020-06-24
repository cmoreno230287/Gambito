import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-box-manager',
  templateUrl: './box-manager.component.html',
  styleUrls: ['./box-manager.component.css']
})
export class BoxManagerComponent implements OnInit {
  B1 = ['Card 1', 'Card 2'];
  B2 = ['Card 3'];
  B3 = ['Card 4', 'Card 5', 'Card 6'];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer);
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
