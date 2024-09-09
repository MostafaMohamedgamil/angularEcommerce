import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  isLoadind: boolean = false;
  apiError: string = '';
  registerForm: FormGroup = new FormGroup({
    // Validation
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-d0-9]{5,10}$/),
    ]), //A123a0
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-d0-9]{5,10}$/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  handelSubmit(registerForm: FormGroup) {
    this.isLoadind = true;

    if (registerForm.valid) {
      //register
      this._AuthService.register(registerForm.value).subscribe({
        next: (res) => {
          console.log('res', res);
          if (res.message === 'success') {
            this.isLoadind = false;
            this._Router.navigate(['/login']);
            // Navigate toLoginPage
          }
        },
        error: (err) => {
          this.isLoadind = false;
          this.apiError = err.error.errors.msg;
          console.log('err', err);
        },
      });
    }
  }
}
