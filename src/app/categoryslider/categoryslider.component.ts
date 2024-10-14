import { Component, OnInit } from '@angular/core';
import { AllproductService } from '../shared/services/allproduct.service';
import { WindowService } from '../shared/services/window.service';

@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrls: ['./categoryslider.component.scss']
})
export class CategorysliderComponent implements OnInit {

  allCategory: any;
  slidesPerView: number = 1;

  constructor(private _AllCategory: AllproductService,private _windowService:WindowService) { }

  ngOnInit(): void {
    this.getAllcategory();
    // this.updateSlidesPerView();
    // this._windowService.addEventListener('resize', this.updateSlidesPerView.bind(this));
    // this._windowService.addResizeListener(this.updateSlidesPerView.bind(this));
  }

  getAllcategory(): any {
    this._AllCategory.getAllCategories().subscribe({
      next: (res) => {
        this.allCategory = res.data;
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // updateSlidesPerView(): void {
  //   const width = window.innerWidth;
  //   if (width >= 1200) {
  //     this.slidesPerView = 6;
  //   } else if (width >= 992) {
  //     this.slidesPerView = 4;
  //   } else if (width >= 768) {
  //     this.slidesPerView = 3;
  //   } else if (width >= 576) {
  //     this.slidesPerView = 2;
  //   } else {
  //     this.slidesPerView = 1;
  //   }
  // }
}

