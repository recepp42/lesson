import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-the-weather',
  templateUrl: './the-weather.component.html',
  styleUrls: ['./the-weather.component.css']
})
export class TheWeatherComponent implements OnInit {
graden:number[]=[0,1,2,3,4];
// village:string[]=["Anchorage","Brussel","Osaka","Auckland","Kaapstad"]
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
 for (let index = 0; index < this.graden.length; index++) {
     this.graden[index]=_.random(0,100);
     console.log(this.graden[index])
    
  }
    },2000)
  }

}
