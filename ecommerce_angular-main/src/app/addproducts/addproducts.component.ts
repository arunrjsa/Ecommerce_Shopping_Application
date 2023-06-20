import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  product:Product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  addProducts(){
    console.log(this.product);
    this.productService.addProducts(this.product).subscribe(data=>{
       alert("Successfully Product added")
    },error=>alert("Sorry Product  is not added"));
  }
}
