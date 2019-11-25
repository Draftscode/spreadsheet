import { ElementRef } from '@angular/core';
import { Cell } from './cell';
import { Row } from './row';

const VIRTUAL_SCROLL_OFFSET = 200; // offset at which virtual scroll hooks in


export class VirtualScroll {
  private _startRowIndex: number;
  private _endRowIndex: number;
  private _offsetTop: number;
  private _startColIndex: number;
  private _endColIndex: number;
  private _offsetLeft: number;
  private _lastOffsetLeft: number;
  private _lastOffsetTop: number;

  public get startColIndex(): number {
    return this._startColIndex;
  }

  public set startColIndex(startColIndex: number) {
    this._startColIndex = startColIndex;
  }

  public get endColIndex(): number {
    return this._endColIndex;
  }

  public set endColIndex(endColIndex: number) {
    this._endColIndex = endColIndex;
  }

  public get offsetLeft(): number {
    return this._offsetLeft;
  }

  public set offsetLeft(offsetLeft: number) {
    this._offsetLeft = offsetLeft;
  }

  private _container: ElementRef;

  public get container(): ElementRef {
    return this._container;
  }

  public set container(container: ElementRef) {
    this._container = container;
  }

  public get startRowIndex(): number {
    return this._startRowIndex;
  }

  public set startRowIndex(startRowIndex: number) {
    this._startRowIndex = startRowIndex;
  }

  public get endRowIndex(): number {
    return this._endRowIndex;
  }

  public set endRowIndex(endRowIndex: number) {
    this._endRowIndex = endRowIndex;
  }

  public get offsetTop(): number {
    return this._offsetTop;
  }

  public set offsetTop(offsetTop: number) {
    this._offsetTop = offsetTop;
  }

  private getOffsetIndex(offset: number, list: any[], attr: 'width' | 'height'): any {
    let sum = 0;
    let index = 0;
    for (const item of list) {
      if (sum + item[attr] > offset) {
        return { index, sum };
      }
      sum += item[attr];
      index++;
    }
    return { index, sum };
  }

  public scrollVertical(scrollTop: number, rows: Row[]) {
    if (!this._container || this._lastOffsetTop === scrollTop) { return; }
    this._lastOffsetTop = scrollTop;

    const start = this.getOffsetIndex(scrollTop - VIRTUAL_SCROLL_OFFSET, rows, 'height');
    const end = this.getOffsetIndex(scrollTop + this._container.nativeElement.clientHeight + VIRTUAL_SCROLL_OFFSET, rows, 'height');
    this._startRowIndex = start.index;
    this._endRowIndex = end.index;
    this._offsetTop = start.sum;
  }

  public scrollHorizontal(scrollLeft: number, rows: Cell[]) {
    if (!this._container || this._lastOffsetLeft === scrollLeft) { return; }
    this._lastOffsetLeft = scrollLeft;

    const start = this.getOffsetIndex(scrollLeft - VIRTUAL_SCROLL_OFFSET, rows, 'width');
    const end = this.getOffsetIndex(scrollLeft + this._container.nativeElement.clientHeight + VIRTUAL_SCROLL_OFFSET, rows, 'width');
    this._startColIndex = start.index;
    this._endColIndex = end.index;
    this._offsetLeft = start.sum;
  }

}
