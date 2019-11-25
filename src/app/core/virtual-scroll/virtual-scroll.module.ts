import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtualScrollDirective } from './virtual-scroll.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    VirtualScrollDirective,
  ],
  exports: [VirtualScrollDirective]
})
export class VirtualScrollModule { }
