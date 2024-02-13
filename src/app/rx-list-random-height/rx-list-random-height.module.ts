import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RxVirtualScrollViewportComponent,
  RxVirtualFor,
  AutoSizeVirtualScrollStrategy,
} from '@rx-angular/template/experimental/virtual-scrolling';


import { RxListContainerComponent } from './rx-list-container/rx-list-container.component';
import { SharedModule } from '../shared/shared.module';
import { RxListRandomHeightRoutingModule } from './rx-list-random-height-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RxListContainerComponent,
  ],
  imports: [
    CommonModule,
    RxVirtualFor,
    SharedModule,
    RxVirtualScrollViewportComponent,
    AutoSizeVirtualScrollStrategy,
    RxListRandomHeightRoutingModule,
    ReactiveFormsModule
  ]
})
export class RxListRandomHeightModule {}
