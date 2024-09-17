import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllorderRoutingModule } from './allorder-routing.module';
import { AllorderComponent } from './allorder.component';


@NgModule({
  declarations: [
    AllorderComponent
  ],
  imports: [
    CommonModule,
    AllorderRoutingModule
  ]
})
export class AllorderModule { }
