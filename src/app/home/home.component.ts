import { Component } from '@angular/core';
import { AllproductService } from '../allproduct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  days: number = 3;
  hours: number = 23;
  minutes: number = 19;
  seconds: number = 56;

  allproduct: any[] = []
  constructor(private _AllProduct: AllproductService) {
    _AllProduct.getAllProducts().subscribe({
      next: (res) => {
        console.log("res", res.data);
        this.allproduct = res.data;
      },
      error: (err) => {
        console.log(`err`, err);
      }
    })
  }

  ngOnInit(): void {
    setInterval(() => {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
        if (this.minutes < 0) {
          this.minutes = 59;
          this.hours--;
          if (this.hours < 0) {
            this.hours = 23;
            this.days--;
          }
        }
      }
    }, 1000);
  }

}
