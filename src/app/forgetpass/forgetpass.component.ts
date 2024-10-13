import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.scss'
})
export class ForgetpassComponent {

  constructor(private _Auth: AuthService, private fb: FormBuilder) { }


  form: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  funForgetPass() {
    if (this.form.valid) {
      this._Auth.forgetPass(this.form.value).subscribe({
        next: (res) => {
          console.log(`resOf Forget Pass`, res);
        },
        error: (err) => {
          console.log(`err`, err);
        }
      })
    }
  }
}
