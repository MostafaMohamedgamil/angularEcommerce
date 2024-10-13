import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllproductsRoutingModule } from './allproducts-routing.module';
import { AllproductsComponent } from './allproducts.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductdetaliesComponent } from './productdetalies/productdetalies.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [AllproductsComponent,
    ProductdetaliesComponent
  ],
  imports: [
  CommonModule,
    AllproductsRoutingModule,
    FormsModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AllproductsModule { }
