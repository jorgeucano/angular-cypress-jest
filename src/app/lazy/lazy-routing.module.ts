import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyCompComponent} from './my-comp/my-comp.component';
import {LazyGuard} from './lazy.guard';

const routes: Routes = [
  {
    path: '',
    component: MyCompComponent,
    canActivate: [LazyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
