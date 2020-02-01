import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewEncapsulation } from '@angular/core';
import { diff_match_patch } from 'diff-match-patch';
import { Diff2Html } from 'diff2html';

@Component({
  selector: 'ngx-diff2html',
  template: `
    <div [innerHtml]="diffOutput"></div>
  `,
  styleUrls: ['./ngx-diff2html.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDiff2htmlComponent implements OnInit, OnChanges {

  @Input() private left: string;
  @Input() private right: string;
  @Input() private filename: string = ' '; // cannot be null or empty
  @Input() private style: 'word' | 'char' = 'word';
  @Input() private format: 'side-by-side' | 'line-by-line' = 'line-by-line';
  private diff: string = null;
  diffOutput: string = null;

  constructor() { }

  ngOnInit() {
    this.diffOutput = this.getDiffOutput(this.left, this.right, this.filename);
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    if (this.propHasChanged(changes.left) || this.propHasChanged(changes.right)) {
      this.diffOutput = this.getDiffOutput(this.left, this.right, this.filename);
    } else if (this.propHasChanged(changes.style) || this.propHasChanged(changes.format)) {
      this.reloadDiff();
    }
  }

  private propHasChanged(change: SimpleChange) {
    return change && !change.isFirstChange() && change.currentValue !== change.previousValue;
  }

  private getDiffOutput(text1: string, text2: string, filename: string) {
    // Get diff
    const dmp = new diff_match_patch();
    const chars = dmp.diff_linesToChars_(text1, text2);
    const lineText1 = chars.chars1;
    const lineText2 = chars.chars2;
    const lineArray = chars.lineArray;
    const diffs = dmp.diff_main(lineText1, lineText2, false);
    dmp.diff_charsToLines_(diffs, lineArray);
    const patchMake = dmp.patch_make(text1, diffs);
    const patchToText = dmp.patch_toText(patchMake);
    // console.info(patchToText);

    // Make it look more like a unified diff style
    // ToDo: find a non tricky way to do this
    let lines = patchToText.split("\n");
    lines.forEach((line: string, index: number) => {
      if (line.startsWith('-')) {
        lines[index] = line.replace(/%0A(.)/g, "%0A-$1");
      } else if (line.startsWith('+')) {
        lines[index] = line.replace(/%0A(.)/g, "%0A+$1");
      }
    });
    const diff = lines.join("\n");
    // console.info(diff);

    const strInput = "--- " + filename + "\n+++ " + filename + "\n" + diff;
    this.diff = decodeURIComponent(strInput); // save diff to use it on reload
    // console.info(this.diff);

    // Return diff in HTML format
    return this.diffToHTML(this.diff);
  }

  private diffToHTML(diff: string) {
    return Diff2Html.getPrettyHtml(diff, {inputFormat: 'diff', matching: 'lines', outputFormat: this.format, diffStyle: this.style});
  }

  reloadDiff() {
    this.diffOutput = this.diffToHTML(this.diff);
  }

}
