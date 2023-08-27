import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SpinnerComponent,
    ModalComponent
  ]
})
export class SharedModule { }
