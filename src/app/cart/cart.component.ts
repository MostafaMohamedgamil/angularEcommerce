import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // cartDetails: any = null;
  cartData$: Observable<any> | undefined


  constructor(private _CartService: CartService, private toastr: ToastrService ,private title:Title) {

    this.setTitle('Cart');
   }

   setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }



  removeItem(productId: string) {
    this.cartData$ = this._CartService.removeCartItem(productId);
    // this._CartService.removeCartItem(productId).subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.cartDetails = res.data
    //     // console.log("remove res", res);
    //     this.toastr.success('Hello world!', 'Toastr fun!');
    //   },
    //   error: (err) => {
    //     console.log("remove err", err);

    //   }
    // })
  }

  upDateItemCount(productId: string, count: number) {
    this.cartData$ = this._CartService.upDateItemount(productId, count);
    // this._CartService.upDateItemount(productId, count).subscribe({
    //   next: (res) => {
    //     this.cartDetails = res.data
    //     this.toastr.success('Cart Updated!', 'Toastr fun!');
    //     // console.log("update item", res);
    //   },
    //   error: (err) => {
    //     console.log(err);

    //   }

    // })
  }

  ngOnInit(): void {
    this.cartData$ = this._CartService.getLoggedUserCart();
    // this._CartService.getLoggedUserCart().subscribe({
    //   next: (res) => {
    //     this.cartDetails = res.data
    //     // console.log("cartId", res);

    //   },
    //   error: (err) => {
    //     console.log(err);

    //   }
    // })
  }
}
