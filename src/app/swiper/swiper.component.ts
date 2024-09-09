import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';


Swiper.use([Navigation, Pagination, Scrollbar, A11y]);


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
import {register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-swiper',
  // template:<swiper-container></swiper-container>,
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent {

}
