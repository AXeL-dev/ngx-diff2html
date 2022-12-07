import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import { DiffFormat, DiffStyle } from "./ngx-diff2html.model";

import { NgxDiff2htmlService } from "./ngx-diff2html.service";

@Component({
  selector: "ngx-diff2html",
  template: ` <div [innerHtml]="diffHTML | safe : 'html'"></div> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxDiff2htmlComponent implements OnInit, OnChanges {
  @Input() left: string;
  @Input() right: string;
  @Input() filename: string = "";
  @Input() format: DiffFormat = "line-by-line";
  @Input() style: DiffStyle = "word";
  @Output() diffChange: EventEmitter<string> = new EventEmitter();
  private diff: string = null;
  diffHTML: string = null;

  constructor(
    private diffService: NgxDiff2htmlService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getDiff();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      this.propHasChanged(changes.left) ||
      this.propHasChanged(changes.right)
    ) {
      this.getDiff();
    } else if (
      this.propHasChanged(changes.style) ||
      this.propHasChanged(changes.format)
    ) {
      this.refreshDiffHTML();
    }
  }

  private propHasChanged(change: SimpleChange) {
    return (
      change &&
      !change.isFirstChange() &&
      change.currentValue !== change.previousValue
    );
  }

  getDiff() {
    this.diff = this.diffService.getDiff(this.left, this.right, this.filename);
    this.refreshDiffHTML();
    this.diffChange.emit(this.diff);
  }

  refreshDiffHTML() {
    this.diffHTML = this.diffService.diffToHTML(
      this.diff,
      this.format,
      this.style
    );
    this.cdr.markForCheck();
  }
}
