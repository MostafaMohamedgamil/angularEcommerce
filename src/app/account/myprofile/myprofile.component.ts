import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.scss'
})
export class MyprofileComponent {
  constructor(private _Auth: AuthService, private toastr: ToastrService,private title:Title,private _localStorageService:LocalStorageService) { 

    this.setTitle('My Profile');
  }

   setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });
  updateData(form: FormGroup) {
    if (form.valid) {
      this._Auth.updateUserData(form.value).subscribe({
        next: (res) => {
          console.log("res update Data", res);
          this.toastr.success('Data Has Updated!', res.message);

        },
        error: (err) => {
          this.toastr.error('Data Has Error', err.message);

        }
      })
    }
  }
  ngOnInit(): void {
    console.log("form", this.form);
    this.form.patchValue(
      JSON.parse(this._localStorageService.getItem('userData') || ''))
  }
}
