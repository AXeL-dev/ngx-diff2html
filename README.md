# NgxDiff2html

[![NPM version](https://img.shields.io/npm/v/ngx-diff2html)](https://www.npmjs.com/package/ngx-diff2html)
[![Downloads](https://img.shields.io/npm/dt/ngx-diff2html)](https://npmjs.org/package/ngx-diff2html)
[![License](https://img.shields.io/npm/l/ngx-diff2html)](LICENSE)

A simple text diff component for Angular, based on [diff-match-patch](https://github.com/google/diff-match-patch) & [diff2html](https://github.com/rtfpessoa/diff2html).

## Demo

[ngx-diff2html Demo](https://axel-dev.github.io/ngx-diff2html)

## Installation

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
+ @import "~diff2html/dist/diff2html.min.css";
```

**3**. Add the following line to `polyfills.ts`:

```diff
  // Add global to window, assigning the value of window itself.
+ (window as any).global = window;
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
- component: `NgxDiff2htmlComponent`
- selector: `ngx-diff2html`

### Inputs

| Input                | Type              | Required                             | Description
| -------------------- | ----------------- | ------------------------------------ | --------------------------
| left                 | string            | Yes                                  | First text to be compared
| right                | string            | Yes                                  | Second text to be compared
| filename             | string            | Optional, default: `` (empty)        | Can be used to display a filename at the top of diff results.
| format               | `DiffFormat`      | Optional, default: `side-by-side`    | Possible values:<br> - `side-by-side`<br> - `line-by-line`
| style                | `DiffStyle`       | Optional, default: `word`            | Possible values:<br> - `word`<br> - `char`

### Outputs

| Output               | Type              | Required                             | Description
| -------------------- | ----------------- | ------------------------------------ | --------------------------
| diffChange           | string            | Optional                             | Event fired when diff changes. The returned value is the text diff in [unified format](http://fileformats.archiveteam.org/wiki/Unified_diff)

## Build

Run `ng build ngx-diff2html` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-diff2html`, go to the dist folder `cd dist/ngx-diff2html` and run `npm publish`.

## License

This project is licensed under the [MIT](LICENSE) license.
