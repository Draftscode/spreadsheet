import { Directive, TemplateRef, ViewContainerRef, OnInit, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appVirtualScroll]',
})
export class VirtualScrollDirective implements OnInit, OnChanges {
  @Input() appVirtualScroll: any[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>,
  ) { }

  ngOnInit(): void {
    this.container.createEmbeddedView(this.template);
  }

  ngOnChanges() {
    for (const input of this.appVirtualScroll) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
