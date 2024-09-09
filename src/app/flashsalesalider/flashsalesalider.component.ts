// import { Component } from '@angular/core';
// import { AllproductService } from '../../allproduct.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

// @Component({
//   selector: 'app-flashsalesalider',
//   templateUrl: './flashsalesalider.component.html',
//   styleUrl: './flashsalesalider.component.scss'
// })
// export class FlashsalesaliderComponent {

//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true
//   }

//   allproduct: any[] = []
//   constructor(private _AllproductService: AllproductService) {

//     _AllproductService.getAllProducts().subscribe({
//       next: (res) => {
//         console.log(`res.data`, res.data);
//         this.allproduct = res.data.slice(5,10)
//       },
//       error: (err) => {
//         console.log("err", err.data);

//       }
//     })

//   }

// }
