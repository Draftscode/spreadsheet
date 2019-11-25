import { Component, Input } from '@angular/core';
import { Cell } from './../cell';

@Component({
  selector: 'app-spreadsheet-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent {
  @Input() width: number;
  @Input() height: number;

  constructor() {
  }



}
