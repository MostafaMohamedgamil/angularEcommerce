import { Component } from '@angular/core';
import { AllproductService } from '../shared/services/allproduct.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.scss'
})
export class AllproductsComponent {
  Products: any;
  searchTerm: string = "";
  constructor(private _AllproductService: AllproductService) { }
  ngOnInit(): void {

    this.allproducts()
  }

  allproducts() {
    this._AllproductService.getAllProducts().subscribe({
      next: (res) => {
        console.log("res:AllproductsComponent:", res.data);
        this.Products = res.data
      },
      error: (err) => {
        console.log("err:AllproductsComponent", err);
      }
    })
  }
}
