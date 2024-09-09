import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { register } from 'swiper/element/bundle';
import { CategorysliderComponent } from '../categoryslider/categoryslider.component';
import { MainsliderComponent } from '../mainslider/mainslider.component';
import { CardComponent } from './card/card.component';
import { FlashsalesaliderComponent } from './flashsalesalider/flashsalesalider.component';
import { SearchPipe } from './pipes/search.pipe';
import { SeemorePipe } from './pipes/seemore.pipe';
import { SharedRoutingModule } from './shared-routing.module';
// import { SwiperModule } from 'swiper/angular'; 
register()
@NgModule({
  declarations: [
    CardComponent,
    SearchPipe,
    SeemorePipe,
    CategorysliderComponent,
    FlashsalesaliderComponent,
    MainsliderComponent
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule,
    // SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CardComponent,
    SearchPipe,
    SeemorePipe,
    CategorysliderComponent,
    FlashsalesaliderComponent,
    MainsliderComponent
  ]
})
export class SharedModule { }
