import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts.component';
import { authguardGuard } from '../authguard.guard';
import { ProductdetaliesComponent } from './productdetalies/productdetalies.component';

const routes: Routes = [
  {path:'', component:AllproductsComponent},
  { path: 'productdetalies/:id', component: ProductdetaliesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllproductsRoutingModule { }
