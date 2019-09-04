import { v4 as uuid } from 'uuid';
import { Cell } from './cell';
export class SelectionArea {
    private _startRow: number;
    private _startCol: number;
    private _endRow: number;
    private _endCol: number;
    private _id: string;

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }


    public get startRow(): number {
        return this._startRow;
    }

    public set startRow(startRow: number) {
        this._startRow = startRow;
    }

    public get startCol(): number {
        return this._startCol;
    }

    public set startCol(startCol: number) {
        this._startCol = startCol;
    }

    public get endRow(): number {
        return this._endRow;
    }

    public set endRow(endRow: number) {
        this._endRow = endRow;
    }

    public get endCol(): number {
        return this._endCol;
    }

    public set endCol(endCol: number) {
        this._endCol = endCol;
    }

    public isInside(cell: Cell): boolean {
        return cell.col >= Math.min(this._startCol, this._endCol) &&
            cell.col <= Math.max(this._startCol, this._endCol) &&
            cell.row >= Math.min(this._startRow, this._endRow) &&
            cell.row <= Math.max(this._startRow, this._endRow);
    }

    constructor(startRow: number, startCol: number, endRow: number, endCol: number) {
        this._startRow = startRow;
        this._startCol = startCol;
        this._endCol = endCol;
        this._endRow = endRow;
        this._id = uuid();
    }
}
