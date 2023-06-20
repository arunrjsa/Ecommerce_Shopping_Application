import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = history.state;
  }

  public updatePro() {
    this.productService.updateProduct(this.product).subscribe(data => {
      alert("successful");
      window.location.href = "viewproducts"
    }, error => {
      alert("unsuccessful")
    })
  }
}
