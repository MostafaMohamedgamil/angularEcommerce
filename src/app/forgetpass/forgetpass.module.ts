import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetpassRoutingModule } from './forgetpass-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ForgetpassComponent } from './forgetpass.component';


@NgModule({
  declarations: [ForgetpassComponent],
  imports: [
    CommonModule,
    ForgetpassRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ]
})
export class ForgetpassModule { }
