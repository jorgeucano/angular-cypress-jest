import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: ImgComponent}
]

@NgModule({
  declarations: [ImgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  bootstrap: [ImgComponent]
})
export class ImageLazyModule { }
