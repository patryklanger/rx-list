import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "rx-list",
  loadChildren: () => import('./rx-list/rx-list.module').then(m => m.RxListModule)
},
{
  path: "list",
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
}, {
  path: "rx-list-random-height",
  loadChildren: () => import('./rx-list-random-height/rx-list-random-height.module').then(m => m.RxListRandomHeightModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
