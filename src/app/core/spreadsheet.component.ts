import {
    AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, HostListener, Input, OnInit, ViewChild
} from '@angular/core';
import { Cell } from './cell';
import { Row } from './row';
import { SelectionModel } from './selection-model';
import { VirtualScroll } from './virtual-scroll';

@Component({
    selector: 'app-spreadsheet',
    templateUrl: './spreadsheet.component.html',
    styleUrls: ['./spreadsheet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpreadsheetComponent implements OnInit, AfterViewInit {
    @Input() columns: Cell[] = [];
    rows: Row[];
    @Input() set aRrows(rows: Row[]) {
        this.rows = rows;
        this.virtualScroll.startRowIndex = 0;
        this.virtualScroll.endRowIndex = this.rows.length - 1;
    }
    /*@ViewChild('verticalHeader', { static: true }) verticalHeader: ElementRef;
    @ViewChild('horizontalHeader', { static: true }) horizontalHeader: ElementRef;*/
    @ViewChild('content', { static: false }) content: ElementRef;
    @ViewChild('scrollContainer', { static: true }) set scrollContainer(container: ElementRef) {
        this.virtualScroll.container = container;
    }
    selectionModel: SelectionModel = new SelectionModel();
    cellHeight = 25;
    virtualScroll: VirtualScroll = new VirtualScroll();

    @HostListener('document:click', ['$event']) clickout(event) {
        if (!this.app.nativeElement.contains(event.target)) { this.selectionModel.clearSelection(); }
    }

    constructor(
        private cd: ChangeDetectorRef,
        private app: ElementRef,
    ) { }

    get combinedRowHeight(): number {
        return this.rows.map((row: Row) => row.height).reduce((accu: number, cur: number) => accu + cur);
    }

    get combinedColWidth(): number {
        return this.columns.map((col: Cell) => col.width).reduce((accu: number, cur: number) => accu + cur);
    }

    ngOnInit() {
        this.cd.detectChanges();
    }

    ngAfterViewInit() {
        this.cd.detectChanges();
    }

    get scrollbarWidth(): number {
        if (!this.content) { return 0; }
        return this.content.nativeElement.offsetWidth - this.content.nativeElement.clientWidth;
    }


    onScroll(event: Event): void {
        const top: number = (event.target as any).scrollTop;
        const left: number = (event.target as any).scrollLeft;

        this.virtualScroll.scrollVertical(top, this.rows);

        this.virtualScroll.scrollHorizontal(left, this.columns);
    }


}
