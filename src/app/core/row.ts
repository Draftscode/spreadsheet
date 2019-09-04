import { Cell } from './cell';

export class Row {
    private _cells: Cell[];

    public get cells(): Cell[] {
        return this._cells;
    }

    public set cells(cells: Cell[]) {
        this._cells = cells;
    }
}
