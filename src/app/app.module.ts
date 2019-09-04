import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpreadsheetModule } from './core/spreadsheet.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpreadsheetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
