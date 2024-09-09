import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { count, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }

  ngOnInit(): void {

  }
  /*
  Post: url + data has product id that add it to cart  +   headers
  */
  headers: any = {
    token: localStorage.getItem('token')
  }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId },
      {
        headers: this.headers,
      }
    )
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: this.headers,
      }
    )
  }

  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers: this.headers,
      }
    )
  }

  upDateItemount(productId: string, count: number ): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      count: count
    },
      {
        headers: this.headers,
      }
    )
  }


}
