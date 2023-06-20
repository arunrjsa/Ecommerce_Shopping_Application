import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  public delcar() {
    this.cartService.emptyCart().subscribe(() => {
      this.router.navigate(['home']);
    }, error => alert("Something went wrong"));
  }

  public email() {
    this.cartService.email().subscribe(() => {
    }, error => {});
  }

}
