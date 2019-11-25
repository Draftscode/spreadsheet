import { Component } from '@angular/core';
import { Row } from './core/row';
import { Cell } from './core/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private rows: Row[];
  private columns: Cell[];
  constructor() {
    this.columns = new Array(30);
    this.rows = new Array(100);

    for (let x = 0; x < 30; x++) {
      const cell = new Cell(x, 0, `${x}: ${0}`);
      cell.width = 100;
      this.columns[x] = cell;
    }
    for (let y = 0; y < 100; y++) {
      const row = new Row();
      row.index = y;
      row.height = this.getRandomArbitrary(25, 40);
      const cells = new Array(30);
      for (let x = 0; x < 30; x++) {
        const cell = new Cell();
        cell.row = y; cell.col = x; cell.label = `${cell.row + 1}: ${cell.col + 1}`;
        cells[x] = cell;
      }
      row.cells = cells;
      this.rows[y] = row;
    }
  }

  private getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
