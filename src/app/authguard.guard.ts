import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {

// constructor(private _Router:Router ){

// }

  if (localStorage.getItem('token') !== null) {
    return true;

  }
  else {
    // this._Router.navigate(['./login'])
    return false;
  }

};
