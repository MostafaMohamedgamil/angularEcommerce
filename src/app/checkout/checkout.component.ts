import { Component } from '@angular/core';
import { CartService } from './../shared/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  cartDetails: any = null;

  constructor(private _CartService: CartService) { }


  ngOnInit(): void {


    this._CartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  handelSubmit(shippingAddress: FormGroup) {
    console.log(shippingAddress.value);
    this._CartService.onlinePayment(shippingAddress, "66d6dc14832c8800a83eaee9").subscribe({
      next: (res: any) => {
        console.log("res.session.url", res.session.url);

      },
      error: (err) => {
        console.log(err);
      }

    })

  }

}
