import { Injectable } from '@angular/core';
import { diff_match_patch } from 'diff-match-patch';
import * as Diff2Html from 'diff2html';
import { DiffFormat, DiffStyle } from './ngx-diff2html.model';

@Injectable({
  providedIn: 'root'
})
export class NgxDiff2htmlService {

  constructor() { }

  getDiff(text1: string, text2: string, filename: string = '', showContext: boolean) {
    // Get diff
    const dmp = new diff_match_patch();
    const chars = dmp.diff_linesToChars_(text1, text2);
    const lineText1 = chars.chars1;
    const lineText2 = chars.chars2;
    const lineArray = chars.lineArray;
    const diffs = dmp.diff_main(lineText1, lineText2, false);
    dmp.diff_charsToLines_(diffs, lineArray);
    const patchMake = dmp.patch_make(text1, diffs);

    // Keep the context lines if showContext is set true.
    if (showContext) {
      patchMake[0].diffs = diffs;
    }
    const patchToText = dmp.patch_toText(patchMake);

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
    const unifiedDiff = lines.join("\n");

    const strInput = "--- " + filename + " \n+++ " + filename + " \n" + unifiedDiff;
    const diff = decodeURIComponent(strInput);
    // Return diff
    return diff;
  }

  diffToHTML(diff: string, format: DiffFormat = 'line-by-line', style: DiffStyle = 'word') {
    return Diff2Html.html(diff, {
      drawFileList: false,
      matching: 'lines',
      outputFormat: format,
      diffStyle: style
    });
  }
}
