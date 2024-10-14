import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CategorysliderComponent } from '../categoryslider/categoryslider.component';
import { MainsliderComponent } from '../mainslider/mainslider.component';
import { SearchPipe } from './pipes/search.pipe';
import { SeemorePipe } from './pipes/seemore.pipe';
import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { FlashsalesaliderComponent } from './components/flashsalesalider/flashsalesalider.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    CardComponent,
    SearchPipe,
    SeemorePipe,
    CategorysliderComponent,
    FlashsalesaliderComponent,
    MainsliderComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CardComponent,
    SearchPipe,
    SeemorePipe,
    CategorysliderComponent,
    FlashsalesaliderComponent,
    MainsliderComponent,
    NotfoundComponent
  ],
})
export class SharedModule {}
