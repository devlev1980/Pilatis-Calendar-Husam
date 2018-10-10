import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatDatepickerModule,
    Material.MatDialogModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatDatepickerModule,
    Material.MatDialogModule

  ],
  declarations: []
})
export class MaterialModule {
}
