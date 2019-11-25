import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CellComponent } from './cell/cell.component';
import { SpreadsheetComponent } from './spreadsheet.component';
import { VirtualScrollModule } from './virtual-scroll/virtual-scroll.module';


@NgModule({
  imports: [
    CommonModule,
    VirtualScrollModule,
  ],
  declarations: [
    SpreadsheetComponent,
    CellComponent,
  ],
  exports: [SpreadsheetComponent]
})
export class SpreadsheetModule { }
