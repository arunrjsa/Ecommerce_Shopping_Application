import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productDetails: any[] = [];

  userid: any = "";

  // cart:Cart = new Cart();

  constructor(private productService: ProductService, private cartService: CartService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productService.getAllProducts().subscribe((resp: Product[]) => {
      console.log(resp);
      this.productDetails = resp;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    }
    );
  }

  addToCart(cartProductObj: Cart){
    cartProductObj.quantity = "1";
    cartProductObj.subTotal = cartProductObj.price;
    this.userid = localStorage.getItem("user");
    cartProductObj.userId = this.userid;
    this.cartService.addToCart(cartProductObj).subscribe(data => {
      this.toast.success({detail: "Success",summary: "Added to cart", duration: 1000});
    }, error => this.toast.error({detail:"Error", summary:"Alredy added to cart", duration:1000}));
  }

}
