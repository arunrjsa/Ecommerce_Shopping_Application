import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productDetails: any[] = [];

  constructor(private productsService: ProductService, private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productsService.getAllProducts()
    .subscribe(
    (resp: Product[]) => {
    console.log(resp);
    this.productDetails = resp;
    }, (error: HttpErrorResponse) => {
    console.log(error);
    }
    );
  }

  public deleteProduct(productId: string) {
    this.productsService.deleteProductById(productId).subscribe(data => {
      window.location.href = "viewproducts";
    }, error => {
      window.location.href = "viewproducts";
    })
  }

  public updateProduct(pro: Product) {
    this.router.navigateByUrl('/updateproduct', {state: pro});
  }

}
