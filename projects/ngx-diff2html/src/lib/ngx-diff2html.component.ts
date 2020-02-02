import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgxDiff2htmlService } from './ngx-diff2html.service';
import { DiffFormat, DiffStyle } from './ngx-diff2html.model';

@Component({
  selector: 'ngx-diff2html',
  template: `
    <div [innerHtml]="diffHTML"></div>
  `,
  styleUrls: ['./ngx-diff2html.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDiff2htmlComponent implements OnInit, OnChanges {

  @Input() private left: string;
  @Input() private right: string;
  @Input() private filename: string = ' '; // cannot be null or empty
  @Input() private format: DiffFormat = 'line-by-line';
  @Input() private style: DiffStyle = 'word';
  @Output() diffChange: EventEmitter<string> = new EventEmitter();
  private diff: string = null;
  diffHTML: string = null;

  constructor(private diffService: NgxDiff2htmlService) { }

  ngOnInit() {
    this.getDiff();
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    if (this.propHasChanged(changes.left) || this.propHasChanged(changes.right)) {
      this.getDiff();
    } else if (this.propHasChanged(changes.style) || this.propHasChanged(changes.format)) {
      this.refreshDiffHTML();
    }
  }

  private propHasChanged(change: SimpleChange) {
    return change && !change.isFirstChange() && change.currentValue !== change.previousValue;
  }

  getDiff() {
    this.diff = this.diffService.getDiff(this.left, this.right, this.filename);
    this.refreshDiffHTML();
    this.diffChange.emit(this.diff);
  }

  refreshDiffHTML() {
    this.diffHTML = this.diffService.diffToHTML(this.diff, this.format, this.style);
  }

}
