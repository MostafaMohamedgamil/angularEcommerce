import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() productss: any;
  // constructor(private router: Router) {}
  constructor(private _CartService: CartService ,private router: Router) {}

  addToCart(productId: string) {
    
    if(localStorage.getItem('token') !==null){
    
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
