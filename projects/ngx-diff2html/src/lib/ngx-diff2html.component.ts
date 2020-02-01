import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { NgxDiff2htmlService } from './ngx-diff2html.service';

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
  @Input() private format: 'side-by-side' | 'line-by-line' = 'line-by-line';
  @Input() private style: 'word' | 'char' = 'word';
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
  }

  refreshDiffHTML() {
    this.diffHTML = this.diffService.diffToHTML(this.diff, this.format, this.style);
  }

}
