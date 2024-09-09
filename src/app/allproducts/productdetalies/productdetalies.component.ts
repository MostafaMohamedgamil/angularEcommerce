import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllproductService } from '../../shared/services/allproduct.service';


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
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-productdetalies',
  templateUrl: './productdetalies.component.html',
  styleUrl: './productdetalies.component.scss'
})
export class ProductdetaliesComponent {

  constructor(private _ActivatedRoute: ActivatedRoute,
    private AllproductService: AllproductService
  ) {

  }
  productDetalis: any
  productId: any;
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params) => {
      // console.log("params: ", params.get('id'));
      this.productId = params.get('id');
    });

    this.AllproductService.getProductsDetails(this.productId).subscribe({
      next: (res) => {
        this.productDetalis = res.data;

      }
    })
  }


}


