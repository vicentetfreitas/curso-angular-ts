import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewComponentComponent } from './new-component/new-component.component';



@NgModule({
  declarations: [
    NewComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewComponentComponent
  ]
})
export class SharedModule { }
