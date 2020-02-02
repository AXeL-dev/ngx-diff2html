# NgxDiff2html

A simple text diff component for Angular, based on [diff-match-patch](https://github.com/google/diff-match-patch) & [diff2html](https://github.com/rtfpessoa/diff2html).

## Demo

[ngx-diff2html Demo](#)

## Installation

```
npm install --save ngx-diff2html
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
| filename             | string            | Optional, default: ` ` (white space) | Can be used to display a filename in the top of diff results. **Cannot be null or empty**
| format               | `DiffFormat`      | Optional, default: `side-by-side`    | Possible values:<br> -`side-by-side`<br> -`line-by-line`
| style                | `DiffStyle`       | Optional, default: `word`            | Possible values:<br> -`word`<br> -`char`

### Outputs

| Output               | Type              | Required                             | Description
| -------------------- | ----------------- | ------------------------------------ | --------------------------
| diffChange           | string            | Optional                             | Event fired when diff changes. The returned value is the diff in [unified format](http://fileformats.archiveteam.org/wiki/Unified_diff)

## Usage

1) Register the `NgxDiff2htmlModule` in a module, for example app module:

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

2) Add the following line to `polyfills.ts`:

```diff
  // Add global to window, assigning the value of window itself.
+ (window as any).global = window;
```

3) Start using the component:

```
<ngx-diff2html
  left="some text"
  right="some other text"
/>
```
