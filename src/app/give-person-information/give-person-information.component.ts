import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-give-person-information',
  templateUrl: './give-person-information.component.html',
  styleUrls: ['./give-person-information.component.css']
})
export class GivePersonInformationComponent implements OnInit {
 people:person[]=[new person("gultekin","recep",new Date(2000,09,28)),new person("john","nobele",new Date(1998,08,6))];
  constructor() { 
 
    
  }


 
  ngOnInit(): void {
     
  }

    calculateAge(date:Date):number
  {
 
    let diff=moment().diff(date,"years");
return diff;
  }

}
export class person
{
naam:string;
voornaam:string;
geboortedatum:Date=new Date();
constructor(naam:string,voornaam:string,geboortedatum:Date){
    this.naam=naam;
    this.voornaam=voornaam;
    this.geboortedatum=geboortedatum;
}
get birthDate(){
return this.geboortedatum;
}
get familyName(){
    return this.naam;
}
get Name(){
    return this.voornaam
}
}