import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartDetails: Cart[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  public getCartItems() {
    this.cartService.getCartItems().subscribe((item: Cart[]) => {
      this.cartDetails = item;
      for(var i=0; i<this.cartDetails.length; i++) {
        this.totalPrice += +this.cartDetails[i].subTotal
      }
      console.log(this.cartDetails)
    }, (error: HttpErrorResponse ) => {
      console.log(error);
    });
  }

  public deleteCartItem(deleteItem: Cart) {
    this.cartService.deleteCartItem(deleteItem.productId).subscribe(data => {
        window.location.href = "cartpayment";
      },error => {
        window.location.href = "cartpayment";
        console.log(error)
      }
    );
  }

  public updateQuantity(quantity: string, cartItem: Cart) {
    this.cartService.updateQuantity(quantity, cartItem).subscribe(respo => {
      window.location.href = "cartpayment";
    }, error => window.location.href = "cartpayment");
  }

  public emptyCart() {
    this.cartService.emptyCart().subscribe(() => {
     alert("Success");
     window.location.href = "cartpayment";
    }, error => alert("Something went wrong"));
  }

}
