import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-how-much-time',
  templateUrl: './how-much-time.component.html',
  styleUrls: ['./how-much-time.component.css']
})
export class HowMuchTimeComponent implements OnInit {
 datebegin:Date=new Date();
 MinutesOver:number=0;
  constructor() { 


  }

  ngOnInit(): void {
    setInterval(()=>{
      let date1=moment(this.datebegin);
  let date2=moment();
  console.log(date2)
 this.MinutesOver=Math.floor(moment.duration(date2.diff(date1)).asMinutes());
    },600)
  }
  

}
