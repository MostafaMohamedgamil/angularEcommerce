import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AllproductService {

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    const baseUrl = environment.BASE_URL + 'products';
    return this._HttpClient.get(baseUrl)
  }
  getProductsDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getAllCategories(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
}
