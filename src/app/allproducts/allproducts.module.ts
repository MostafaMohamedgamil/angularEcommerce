import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllproductsRoutingModule } from './allproducts-routing.module';
import { AllproductsComponent } from './allproducts.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SeemorePipe } from '../shared/pipes/seemore.pipe';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { AppModule } from '../app.module';
import { ProductdetaliesComponent } from './productdetalies/productdetalies.component';
import { register } from 'swiper/element/bundle';
register();


@NgModule({
  declarations: [AllproductsComponent,
    ProductdetaliesComponent
  ],
  imports: [
    CommonModule,
    AllproductsRoutingModule,
    FormsModule,
    SharedModule,
    // swiper
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AllproductsModule { }
