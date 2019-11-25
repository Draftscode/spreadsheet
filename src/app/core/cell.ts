export class Cell {
  private _label: string;
  private _row: number;
  private _col: number;
  private _width: number;

    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
    }


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

  constructor(col?: number, row?: number, label?: string) {
    this._col = col; this._row = row; this._label = label;
  }


  public get label(): string {
    return this._label;
  }

  public set label(label: string) {
    this._label = label;
  }
}
