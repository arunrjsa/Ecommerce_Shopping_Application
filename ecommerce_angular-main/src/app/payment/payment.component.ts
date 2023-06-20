import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  placed(){
    console.log()
    {
    alert("Done")
      window.location.href='/order'
     }//,error=>alert("Sorry Please enter correct UserId and Password");
     }

}
