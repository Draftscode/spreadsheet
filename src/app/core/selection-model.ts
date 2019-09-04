import { Observable, Subject } from 'rxjs';
import { Cell } from './cell';
import { SelectionArea } from './selection';

export class SelectionModel {
    private _selections: SelectionArea[];
    private _change: Subject<SelectionArea[]> = new Subject<SelectionArea[]>();
    private _currentSelection: SelectionArea;

    public get selections(): SelectionArea[] {
        return this._selections;
    }

    public set selections(selections: SelectionArea[]) {
        this._selections = selections;
    }

    public selectionChanged(): Observable<SelectionArea[]> {
        return this._change.asObservable();
    }

    private change(): void {
        this._change.next(this._selections);
    }

    public click(cell: Cell): void {
        this._selections = [];
        this._selections.push(new SelectionArea(cell.row, cell.col, cell.row, cell.col));
        this.change();
    }

    public up(cell: Cell) {

        if (!this._currentSelection) { return; }
        if (!this._selections) { this._selections = []; }
        this._selections = this._selections.filter((sArea: SelectionArea) => sArea.id !== this._currentSelection.id);
        if (this._currentSelection.startCol === cell.col && this._currentSelection.startRow === cell.row) {
            this._selections = [];
        }
        console.log(this._currentSelection.startRow, this._currentSelection.startCol, cell.row, cell.col);
        const area = new SelectionArea(this._currentSelection.startRow, this._currentSelection.startCol, cell.row, cell.col);
        area.id = this._currentSelection.id;
        this._selections.push(area);
        this._currentSelection = null;
    }

    public over(cell: Cell) {

        if (!this._currentSelection) { return; }
        if (!this._selections) { this._selections = []; }
        this._selections = this._selections.filter((sArea: SelectionArea) => sArea.id !== this._currentSelection.id);
        const area = new SelectionArea(this._currentSelection.startRow, this._currentSelection.startCol, cell.row, cell.col);
        area.id = this._currentSelection.id;
        this._selections.push(area);
    }

    public down(cell: Cell) {
        this._currentSelection = new SelectionArea(cell.row, cell.col, cell.row, cell.col)
    }

}
