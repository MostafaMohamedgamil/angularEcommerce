import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, count, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  numOfCartItems = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient,private _localStorageService:LocalStorageService) {
    this.getLoggedUserCart().subscribe({
      next: (res) => {
        // numOfCartItems
        this.numOfCartItems.next(res.numOfCartItems);
        console.log(res);
        this._localStorageService.setItem('UserId', res.data.cartOwner)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
  /*
  Post: url + data has product id that add it to cart  +   headers
  */
  headers: any = {
    token: this._localStorageService.getItem('token') ? this._localStorageService.getItem('token') : '',
  };

  addToCart(productId: string): Observable<any> {   
    const BASE_URL = environment.BASE_URL;
    return this._HttpClient.post(
      BASE_URL + `cart`,
      { productId: productId },
      {
        headers: this.headers,
      }
    );
  }

  getLoggedUserCart(): Observable<any> {
    console.log(this.headers)
    const BASE_URL = environment.BASE_URL + 'cart';
    return this._HttpClient.get(BASE_URL, {
      headers: this.headers,
    });
  }

  removeCartItem(productId: string): Observable<any> {
    const BASE_URL = environment.BASE_URL + 'cart';

    return this._HttpClient.delete(BASE_URL + '/' + productId, {
      headers: this.headers,
    });
  }

  upDateItemount(productId: string, count: number): Observable<any> {
    const BASE_URL = environment.BASE_URL + 'cart';
    return this._HttpClient.put(
      BASE_URL + '/' + productId,
      {
        count: count,
      },
      {
        headers: this.headers,
      }
    );
  }

  onlinePayment(shippingAddress: any, cartId: string) {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress,
      },
      {
        headers: this.headers,
      }
    );
  }

  cashPayment(shippingAddress: any,cartId: string){
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      {
        shippingAddress: shippingAddress,
      },
      {
        headers: this.headers,
      }
    )
  }
}