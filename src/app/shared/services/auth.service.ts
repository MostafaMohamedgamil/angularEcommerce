import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);

  headers: any = {
    token: localStorage.getItem('token'),
  };

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.decodeUserData();
    }
  }




  decodeUserData() {
    let encodeToken = JSON.stringify(localStorage.getItem('token'));
    let decodeToken: any = jwtDecode(encodeToken)
    console.log("decodeToken", decodeToken);
    this.userData.next(decodeToken);


  }


  logOut() {
    localStorage.removeItem('token')
    this.userData.next(null)
    this._Router.navigate(['/login']);

  }
  register(userData: object): Observable<any> {

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData)

  }

  login(userData: object): Observable<any> {

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData)

  }
  userId: string = localStorage.getItem('UserId') || '';
  //  userId: string | null = localStorage.getItem('UserId');

  getAllOrders(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${this.userId}`)
  }





  updateUserData(userData: any): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
      userData,
      {
        headers: this.headers,
      }
    )
  }

  updateUserPass(userPass: any): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
      userPass,
      {
        headers: this.headers
      }
    )
  }


  userAddress(userData: any): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/addresses`,
      userData,
      {
        headers: this.headers,
      }
    )
  }


  getUserAddress(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/addresses`,
      {
        headers: this.headers,
      }
    )
  }
  removeUserAddress(addressId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,
      {
        headers: this.headers,
      }
    )

  }

}
