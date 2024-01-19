import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';



@NgModule({
  declarations: [
    ListElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListElementComponent
  ]
})
export class SharedModule {}
