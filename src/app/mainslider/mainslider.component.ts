import { Component } from '@angular/core';
import Swiper, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrl: './mainslider.component.scss'
})
export class MainsliderComponent {
//   Pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
// }
}
