import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { LoadingService } from "../services/loading.service";



@Injectable()
export class headerInterceptor implements HttpInterceptor {
  
  constructor(public loaderService:LoadingService){  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loaderService.isLoading.next(false)
        }
      )
    );
  }
}



 // let token: any = localStorage.getItem('token')
    // let updatedReq = req.clone({
    //   headers: req.headers.set('token', token)
    // });
