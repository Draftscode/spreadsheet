import { Cell } from './cell';

export class Row {
  private _cells: Cell[];
  private _height: number;
  private _index: number;

  public get index(): number {
    return this._index;
  }

  public set index(index: number) {
    this._index = index;
  }


  public get height(): number {
    return this._height;
  }

  public set height(height: number) {
    this._height = height;
  }


  public get cells(): Cell[] {
    return this._cells;
  }

  public set cells(cells: Cell[]) {
    this._cells = cells;
  }
}
