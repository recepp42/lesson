import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
 time:Date=new Date();

 updateTime=()=>{
this.time=new Date();
console.log(this.time);
console.log(this)
// this.time.setHours
 }
//    let newdate:Date=new Date();

// this.time.setMinutes=newdate.getMinutes;
// this.time.setSeconds=newdate.getSeconds;
  
 

  constructor() {

   }

  ngOnInit(): void {
  setInterval((this.updateTime),1000);   
  }
 

}
