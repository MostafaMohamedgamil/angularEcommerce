import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LocalStorageService } from '../shared/services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router, private title: Title,private _localStorageService: LocalStorageService) {
    this.setTitle('Login Page');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

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
          if (res.message === "success") {
            this._localStorageService.setItem('token', res.token);
            // save name and email in localStorage to use it in account settings
            this._localStorageService.setItem('userData', JSON.stringify(res.user));
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
