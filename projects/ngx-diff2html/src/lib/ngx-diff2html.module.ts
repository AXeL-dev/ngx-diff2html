import { NgModule } from '@angular/core';
import { NgxDiff2htmlComponent } from './ngx-diff2html.component';
import { SafePipe } from '../pipes/safe.pipe';



@NgModule({
  declarations: [
    NgxDiff2htmlComponent,
    SafePipe
  ],
  imports: [
  ],
  exports: [
    NgxDiff2htmlComponent
  ]
})
export class NgxDiff2htmlModule { }
