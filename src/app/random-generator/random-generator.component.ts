import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.css']
})
export class RandomGeneratorComponent implements OnInit {
random:number=_.random(0,100);
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
this.random=_.random(0,100);
    },2000)
  }

}
