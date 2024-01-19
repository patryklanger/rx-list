import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "rx-list",
  loadChildren: () => import('./rx-list/rx-list.module').then(m => m.RxListModule)
},
{
  path: "list",
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
