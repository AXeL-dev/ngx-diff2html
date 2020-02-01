import { Component } from '@angular/core';

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
  diffStyle: 'word' | 'char' = 'word';
  outputFormat: 'side-by-side' | 'line-by-line' = 'line-by-line';
}
