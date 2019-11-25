import { Cell } from './cell';
import { SelectionArea, SelectionBorders } from './selection';

export class SelectionModel {
  private _selections: SelectionArea[];
  private _currentSelection: SelectionArea;


  public get selections(): SelectionArea[] {
    return this._selections;
  }

  public set selections(selections: SelectionArea[]) {
    this._selections = selections;
  }

  public clearSelection(): void {
    this._selections = [];
    this._currentSelection = null;
  }

  public click(cell: Cell): void {
    this._selections = [];
    this._selections.push(new SelectionArea(cell.row, cell.col, cell.row, cell.col));
  }

  public up(event: MouseEvent, cell: Cell) {
    if (!this._currentSelection) { return; }

    const area = new SelectionArea(this._currentSelection.startRow, this._currentSelection.startCol, cell.row, cell.col);
    area.id = this._currentSelection.id;

    this._selections = this._selections.filter((sArea: SelectionArea) => sArea.id !== area.id);

    this._selections.push(area);
    this._currentSelection = null;
  }

  public over(event: MouseEvent, cell: Cell) {
    if (!this._currentSelection) { return; }

    this._currentSelection.endCol = cell.col;
    this._currentSelection.endRow = cell.row;

  }

  public down(event: MouseEvent, cell: Cell) {
    this._currentSelection = new SelectionArea(cell.row, cell.col, cell.row, cell.col);
    if (!this._selections || !event.ctrlKey) {
      this._selections = [];
    }
    this._selections.push(this._currentSelection);
  }

  public getBorders(cell: Cell): string {
    const borders: SelectionBorders = {
      top: this.selections.map((area: SelectionArea) => area.getBorder(cell).top).find((border: boolean) => border === true),
      bottom: this.selections.map((area: SelectionArea) => area.getBorder(cell).bottom).find((border: boolean) => border === true),
      left: this.selections.map((area: SelectionArea) => area.getBorder(cell).left).find((border: boolean) => border === true),
      right: this.selections.map((area: SelectionArea) => area.getBorder(cell).right).find((border: boolean) => border === true),
    };

    let result = '';
    for (const key of Object.keys(borders)) {
      if (borders[key]) {
        result += ` ${key}`;
      }
    }
    return result;
  }

  public getSelectionCount(cell: Cell): number {
    let count = 0;
    if (!this._selections) { return 0; }
    this._selections.forEach((area: SelectionArea) => {
      area.isInside(cell) ? count++ : 0;
    });

    return count / (3 + count);
  }

}
