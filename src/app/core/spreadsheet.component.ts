import { Component, Input } from '@angular/core';
import { Cell } from './cell';
import { Row } from './row';
import { SelectionModel } from './selection-model';

@Component({
    selector: 'app-spreadsheet',
    templateUrl: './spreadsheet.component.html',
    styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent {
    @Input() columns;
    @Input() rows: Row[];
    selectionModel: SelectionModel = new SelectionModel();

    constructor() {
        this.rows = [];
        for (let y = 0; y < 50; y++) {
            const row = new Row();
            const cells = [];
            for (let x = 0; x < 10; x++) {
                const cell = new Cell();
                cell.row = y; cell.col = x; cell.label = `${cell.row}: ${cell.col}`;
                cells.push(cell);
            }
            row.cells = cells;
            this.rows.push(row);
        }
    }
}
