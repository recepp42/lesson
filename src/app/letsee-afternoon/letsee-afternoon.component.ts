import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letsee-afternoon',
  templateUrl: './letsee-afternoon.component.html',
  styleUrls: ['./letsee-afternoon.component.css']
})
export class LetseeAfternoonComponent implements OnInit {
 currenttime:Date=new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
