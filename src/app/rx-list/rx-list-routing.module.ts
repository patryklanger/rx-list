import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from '../list/list-container/list-container.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: "",
  component: ListContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxListRoutingModule {}
