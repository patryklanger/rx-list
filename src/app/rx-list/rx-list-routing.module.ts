import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RxListContainerComponent } from './rx-list-container/rx-list-container.component';

const routes: Routes = [{
  path: "",
  component: RxListContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxListRoutingModule {}
