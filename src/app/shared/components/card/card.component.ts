import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() productss: any;

  constructor(private _CartService: CartService) {}

  addToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log('cart res', res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
