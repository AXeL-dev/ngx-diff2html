import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
//import { NgxDiff2htmlModule } from 'ngx-diff2html';
import { NgxDiff2htmlModule } from "projects/ngx-diff2html/src/public-api";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzRadioModule } from "ng-zorro-antd/radio";
import en from "@angular/common/locales/en";
/** config angular i18n **/
import { registerLocaleData } from "@angular/common";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzGridModule,
    NzInputModule,
    NzRadioModule,
    NgxDiff2htmlModule,
  ],
  providers: [
    /** config ng-zorro-antd i18n (language && date) **/
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
