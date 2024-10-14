import { Component } from '@angular/core';
import { AllproductService } from '../../services/allproduct.service';
import Swiper, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-flashsalesalider',
  templateUrl: './flashsalesalider.component.html',
  styleUrl: './flashsalesalider.component.scss',
})
export class FlashsalesaliderComponent {


  allproduct: any[] = [];
  constructor(private _AllproductService: AllproductService) {
    _AllproductService.getAllProducts().subscribe({
      next: (res) => {
        this.allproduct = res.data.slice(5, 15);
      },
      error: (err) => {
        console.log('err', err.data);
      },
    });
  }
}
