import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JorgeucanoComponent} from './jorgeucano/jorgeucano.component';


const routes: Routes = [
  {path: 'jorgeucano', component: JorgeucanoComponent},
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  {
    path: 'lazy2',
    loadChildren: () => import('./lazy/lazy.module')
                          .then(mod => mod.LazyModule),
    data: { preload: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
