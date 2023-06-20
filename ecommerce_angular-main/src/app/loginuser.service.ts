import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseUrl="http://localhost:8080/user/userlogin";
  constructor(private httpClient: HttpClient) {}
  
  loginUser(user: User):Observable<object>{
  console.log(user)
  return this.httpClient.post(`${this.baseUrl}`,user);
  }

  adminLogin(admin: Admin) {
    return this.httpClient.post("http://localhost:8080/user/adminlogin", admin)
  }
}
