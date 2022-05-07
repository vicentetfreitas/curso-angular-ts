import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { NewComponentComponent } from './new-component/new-component.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewComponentComponent, InputComponent
  ]
})
export class SharedModule { }
