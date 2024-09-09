import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AllproductService } from '../allproduct.service';
register();

@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrl: './categoryslider.component.scss'
})
export class CategorysliderComponent {

  allCategory: any
constructor(private _AllCategory: AllproductService) {
}
ngOnInit(): void {
  this.getAllcategory();
}

getAllcategory(): any {
  this._AllCategory.getAllCategories().subscribe({
    next: (res) => {
      console.log("rescat", res.data);
      this.allCategory = res.data;
    },
    error: (err) => {
      console.log('err', err);
    }

  })
}
}
