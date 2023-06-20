import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addProducts(product: Product):Observable<object>{    
    return this.httpClient.post("http://localhost:8080/user/addProduct",product);
  }

  public getAllProducts() {
    return this.httpClient.get<Product[]>("http://localhost:8080/user/getAllProducts")
  }

  public deleteProductById(productId: any) {
    return this.httpClient.delete(`http://localhost:8080/user/deleteProduct/${productId}`);
  }

  public updateProduct(product: any) {
    return this.httpClient.post("http://localhost:8080/user/updateProduct", product);
  }

}
