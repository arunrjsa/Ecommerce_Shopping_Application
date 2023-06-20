import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = "http://localhost:8080/user/signup";


  constructor(private httpClient:HttpClient) { }
  registerUser(user:User):Observable<object>{
    console.log(user);
    
   return this.httpClient.post(`${this.baseUrl}`,user);
    
  }
}

