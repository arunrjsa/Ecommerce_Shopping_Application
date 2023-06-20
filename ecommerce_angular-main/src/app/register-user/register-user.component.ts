import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User=new User();

  constructor(private registerService:RegisterService, private router: Router) { }

  ngOnInit(): void {

  }
  
  
  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("User registeration successfully")
      this.router.navigate(['home']);
    },error=>alert("User registeration unsuccessful"));
  
  }

}
