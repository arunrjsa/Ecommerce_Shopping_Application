import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUrl = "http://localhost:8080/user/cart";
  userId = localStorage.getItem("user"); 

  constructor(private httpClient:HttpClient) {}

  addToCart(obj: Cart): Observable<object> {
    return this.httpClient.post(`${this.cartUrl}`,obj);
  }

  public getCartItems() {
    
    return this.httpClient.get<Cart[]>(`http://localhost:8080/user/getCartItem/${this.userId}`)
  }

  public deleteCartItem(productId: any) {
    return this.httpClient.delete(`http://localhost:8080/user/deleteItem/${this.userId}/${productId}`);
  }

  public updateQuantity(quantity: string, value: any) {
    return this.httpClient.post(`http://localhost:8080/user/updateQuantity/${this.userId}/${quantity}`, value);
  }

  public emptyCart() {
    return this.httpClient.delete(`http://localhost:8080/user/emptyCart/${this.userId}`)
  }

  public email() {
    return this.httpClient.post(`http://localhost:8080/user/buy/${this.userId}`, {});
  }

}
