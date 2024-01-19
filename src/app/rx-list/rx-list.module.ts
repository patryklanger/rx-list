import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FixedSizeVirtualScrollStrategy, // choose any strategy you like
  RxVirtualScrollViewportComponent,
  RxVirtualFor,
} from '@rx-angular/template/experimental/virtual-scrolling';


import { RxListContainerComponent } from './rx-list-container/rx-list-container.component';
import { RxListRoutingModule } from './rx-list-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RxListContainerComponent,
  ],
  imports: [
    CommonModule,
    RxVirtualFor,
    SharedModule,
    RxVirtualScrollViewportComponent,
    FixedSizeVirtualScrollStrategy,
    RxListRoutingModule,
  ]
})
export class RxListModule {}
