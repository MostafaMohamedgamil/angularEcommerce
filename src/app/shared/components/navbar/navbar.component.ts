import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logout() {
    this._AuthService.logOut();
  }

  // by default to logins
  islogin: boolean = false;
  constructor(private _AuthService: AuthService) {
    if (_AuthService.userData != null) {
      this.islogin = true;
    } else {
      this.islogin = false;
    }

    _AuthService.userData.subscribe({
      next: () => {
        if (_AuthService.userData.getValue() !== null) {
          this.islogin = true;
        } else {
          this.islogin = false;
        }
      },
    });
  }
}
