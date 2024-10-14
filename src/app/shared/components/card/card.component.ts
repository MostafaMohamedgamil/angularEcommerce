import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() productss: any;
  // constructor(private router: Router) {}
  constructor(private _CartService: CartService ,private router: Router ,private _localStorageService:LocalStorageService) {}

  addToCart(productId: string) {
    
    if(this._localStorageService.getItem('token') !==null){
    
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        this._CartService.numOfCartItems.next(res.numOfCartItems)
        // console.log('cart res', res);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }
  else{
    this.router.navigate(['/login']);
  }
  }
}
