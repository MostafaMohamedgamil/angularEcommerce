import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";

export const authguardGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService); // Inject the service
  const router = inject(Router);

  const token = localStorageService.getItem('token');
  console.log('Checking token:', token);
  
  if (token !== null) {
    console.log('Token is present:', token);
    return true;
  } else {
    console.log('Token is missing');
    router.navigate(['/login']);
    return false;
  }
};
