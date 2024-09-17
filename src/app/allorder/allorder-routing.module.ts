import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllorderComponent } from './allorder.component';

const routes: Routes = [
  {path:'',component:AllorderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllorderRoutingModule { }
