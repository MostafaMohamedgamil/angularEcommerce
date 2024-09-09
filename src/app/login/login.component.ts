import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  isLoadind: boolean = false;
  apiError: string = ""
  loginForm: FormGroup = new FormGroup({
    // Validation
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-d0-9]{5,10}$/)]), //A123a0

  });

  handelLogIn(loginForm: FormGroup) {
    this.isLoadind = true;

    if (loginForm.valid) {
      //register
      this._AuthService.login(loginForm.value).subscribe({
        next: (res) => {
          console.log("res", res);
          if (res.message === "success") {
            localStorage.setItem('token', res.token);
            this._AuthService.decodeUserData();
            this.isLoadind = false;
            this._Router.navigate(['/home']);
            // Navigate toLoginPage
          }
        },
        error: (err) => {
          this.isLoadind = false;
          this.apiError = err.error.errors.msg
          console.log("err", err)
        }


      })
    }


  }



}
