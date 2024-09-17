import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrl: './allorder.component.scss'
})
export class AllorderComponent {

  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
    this.allorders()
  }
  orders: any;
  allorders() {
    this._AuthService.getAllOrders().subscribe({
      next: (res) => {
        console.log("allOrder", res);
        this.orders = res
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
