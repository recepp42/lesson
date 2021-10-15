import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-random-score',
  templateUrl: './random-score.component.html',
  styleUrls: ['./random-score.component.css']
})
export class RandomScoreComponent implements OnInit {
score:number=0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
this.score+=_.random(1,11);
    },2000)
  }

}
