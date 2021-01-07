# NgxDiff2html

[![NPM version](https://img.shields.io/npm/v/ngx-diff2html)](https://www.npmjs.com/package/ngx-diff2html)
[![Downloads](https://img.shields.io/npm/dt/ngx-diff2html)](https://www.npmjs.com/package/ngx-diff2html)
[![License](https://img.shields.io/npm/l/ngx-diff2html)](LICENSE)
[![Donate](https://img.shields.io/badge/PayPal-Donate-gray.svg?style=flat&logo=paypal&colorA=0071bb&logoColor=fff)](https://www.paypal.me/axeldev)

A simple text diff component for Angular, based on [diff-match-patch](https://github.com/google/diff-match-patch) & [diff2html](https://github.com/rtfpessoa/diff2html).

## Demo

[ngx-diff2html Demo](https://axel-dev.github.io/ngx-diff2html)

## Installation

```
npm install --save ngx-diff2html
```

## Usage

**1**. Register the `NgxDiff2htmlModule` in a module, for example app module:

```diff
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppComponent } from './app.component';
+ import { NgxDiff2htmlModule } from 'ngx-diff2html';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
+     NgxDiff2htmlModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
```

**2**. Import diff2html css in `styles.css`:

```diff
  /* You can add global styles to this file, and also import other style files */
+ @import "~diff2html/bundles/css/diff2html.min.css";
```

**3**. You may also need to add the following lines to `polyfills.ts`:

```diff
  // Add global to window, assigning the value of window itself.
+ (window as any).global = window;
+ (window as any).process = { env: { DEBUG: undefined } };
```

**4**. Start using the component:

```html
<ngx-diff2html
  left="some text"
  right="some other text"
></ngx-diff2html>
```

## API

- module: `NgxDiff2htmlModule`
- service: `NgxDiff2htmlService`
- component: `NgxDiff2htmlComponent`
- selector: `ngx-diff2html`

### Inputs

| Input                | Type              | Required                             | Description
| -------------------- | ----------------- | ------------------------------------ | --------------------------
| left                 | string            | Yes                                  | First text to be compared
| right                | string            | Yes                                  | Second text to be compared
| filename             | string            | Optional, default: '' (empty)        | Can be used to display a filename at the top of diff results
| format               | `DiffFormat`      | Optional, default: `side-by-side`    | Possible values:<br> - `side-by-side`<br> - `line-by-line`
| style                | `DiffStyle`       | Optional, default: `word`            | Possible values:<br> - `word`<br> - `char`

### Outputs

| Output               | Type              | Required                             | Description
| -------------------- | ----------------- | ------------------------------------ | --------------------------
| diffChange           | string            | Optional                             | Event fired when diff changes. Returns text diff in [unified format](http://fileformats.archiveteam.org/wiki/Unified_diff)

### Methods

#### `NgxDiff2htmlService.getDiff(text1, text2, filename)`

Get text diff between `text1` & `text2` in [unified format](http://fileformats.archiveteam.org/wiki/Unified_diff).

Returns:
- `string` diff

#### `NgxDiff2htmlService.diffToHTML(diff, format, style)`

Convert unified diff string to HTML using diff2html.

Returns:
- `string` HTML diff

#### Example:

```typescript
import { Component } from '@angular/core';
import { NgxDiff2htmlService } from 'ngx-diff2html';

@Component({
  selector: 'app-root',
  template: `<div [innerHtml]="diffHTML"></div>`,
  styles: [],
  providers: [
    NgxDiff2htmlService
  ]
})
export class AppComponent {

  diffHTML: string = null;

  constructor(private diffService: NgxDiff2htmlService) {
    const diff = this.diffService.getDiff('first text', 'second text');
    this.diffHTML = this.diffService.diffToHTML(diff);
  }

}
```

## Build

Run `ng build ngx-diff2html` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-diff2html`, go to the dist folder `cd dist/ngx-diff2html` and run `npm publish`.

## License

This project is licensed under the [MIT](LICENSE) license.
