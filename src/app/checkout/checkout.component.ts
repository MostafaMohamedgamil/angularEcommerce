import { Component } from '@angular/core';
import { CartService } from './../shared/services/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cartDetails: any = null;
  // cartId: string | null = ""
  constructor(private _CartService: CartService,private _Router:Router) { }

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      // next: (res,params) => {
      next: (res) => {
        this.cartDetails = res.data;
        console.log(res);
        // this.cartId=params.get('id')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  form: FormGroup = new FormGroup({
    details: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    payment: new FormControl(null, Validators.required)
  });

  navigateToPage(url: string) {
    window.location.href = url
  }


  handelSubmit() {
    if (this.form.invalid) {
      return console.log('invalid form');
    }
    console.log(this.form.value);
    // return console.log(shippingAddress.value);
    if (this.form.value.payment == 'bank') {
      this._CartService
        .onlinePayment(this.form.value, '66ea693d945e017d6e585af5')
        .subscribe({
          next: (res: any) => {
            this.navigateToPage(res.session.url)
            console.log('res.session.url', res.session.url);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
    else {
      this._CartService
        .cashPayment(this.form.value, '66ea693d945e017d6e585af5')
        .subscribe({
          next: (res: any) => {
            console.log("Cash RES", res);
this._Router.navigate(['/home'])
          },
          error: (err) => {
            console.log("Cash Err", err);

          }
        })
    }
  }
}
