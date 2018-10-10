import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as iginite from 'igniteui-angular';

@NgModule({
  imports: [
    CommonModule,
    iginite.IgxDatePickerModule
  ],
  exports: [
    iginite.IgxDatePickerModule
  ],
  declarations: []
})
export class IgniteUiModule {
}
