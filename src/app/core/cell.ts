export class Cell {
    private _label: string;
    private _row: number;
    private _col: number;

    public get row(): number {
        return this._row;
    }

    public set row(row: number
    ) {
        this._row = row;
    }

    public get col(): number {
        return this._col;
    }

    public set col(col: number
    ) {
        this._col = col;
    }

    constructor() { }


    public get label(): string {
        return this._label;
    }

    public set label(label: string) {
        this._label = label;
    }
}