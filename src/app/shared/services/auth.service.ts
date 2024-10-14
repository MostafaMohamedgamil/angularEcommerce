import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  userData = new BehaviorSubject(null);

  headers: any = {
    token: this._localStorageService.getItem('token'),
  };

  constructor(private _HttpClient: HttpClient, private _Router: Router, private _localStorageService: LocalStorageService) {
    if (_localStorageService.getItem('token') !== null) {
      this.decodeUserData();
    }
  }




  decodeUserData() {
    let encodeToken = JSON.stringify(this._localStorageService.getItem('token'));
    let decodeToken: any = jwtDecode(encodeToken)
    console.log("decodeToken", decodeToken);
    this.userData.next(decodeToken);


  }


  logOut() {
    this._localStorageService.removeItem('token')
    this._localStorageService.removeItem('UserId')
    this._localStorageService.removeItem('userData')
    this.userData.next(null)
    this._Router.navigate(['/login']);

  }
  register(userData: object): Observable<any> {
    const baseUrl = environment.BASE_URL + 'auth/signup'
    return this._HttpClient.post(baseUrl, userData)
    // return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData)

  }

  login(userData: object): Observable<any> {
    const baseUrl = environment.BASE_URL + 'auth/signin'
    return this._HttpClient.post(baseUrl, userData)
    // return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData)

  }
  userId: string = this._localStorageService.getItem('UserId') || '';
  //  userId: string | null = this._localStorageService.getItem('UserId');

  getAllOrders(): Observable<any> {
    const baseUrl = environment.BASE_URL + `orders/user/${this.userId}`
    return this._HttpClient.get(baseUrl)


    // return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${this.userId}`)
  }





  updateUserData(userData: any): Observable<any> {
    const baseUrl = environment.BASE_URL + `users/updateMe/`
    return this._HttpClient.put(baseUrl, userData,
      {
        headers: this.headers
      }
    )

    // return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
    //   userData,
    //   {
    //     headers: this.headers,
    //   }
    // )
  }

  updateUserPass(userPass: any): Observable<any> {
    const baseUrl = environment.BASE_URL + `users/changeMyPassword`
    return this._HttpClient.put(baseUrl, userPass,
      {
        headers: this.headers
      }
    )

    // return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
    //   userPass,
    //   {
    //     headers: this.headers
    //   }
    // )
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


  forgetPass(userData: any): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
      userData
    )
  }
}
