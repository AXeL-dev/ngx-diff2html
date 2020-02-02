import { Component } from '@angular/core';
import { DiffStyle, DiffFormat } from 'ngx-diff2html/ngx-diff2html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leftContent: string = `{
    "name": "John",
    "age": 30,
    "car": null
  }`;
  rightContent: string = `{
    "name": "John",
    "age": 30,
    "cars": {
      "car1": "Ford",
      "car2": "BMW",
      "car3": "Fiat"
    }
  }`;
  diffStyle: DiffStyle = 'word';
  outputFormat: DiffFormat = 'line-by-line';

  onDiffChange(diff: string) {
    console.log(diff);
  }
}
