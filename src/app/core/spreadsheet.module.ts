import { NgModule } from '@angular/core';
import { SpreadsheetComponent } from './spreadsheet.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SpreadsheetComponent
    ],
    exports: [SpreadsheetComponent]
})
export class SpreadsheetModule { }
