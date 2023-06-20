import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private loginuserService: LoginuserService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    console.log(this.admin)
    this.loginuserService.adminLogin(this.admin).subscribe(data=>{
    alert("Login Successfully")
    window.location.href='/admindashboard'
    },error=>alert("Sorry Please enter correct UserId and Password"));
  }

}
