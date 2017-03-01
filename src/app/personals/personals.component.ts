import { Component, OnInit } from '@angular/core';

import { Departament } from '../departments/departments';
import { DepService } from '../departments/departments.service';

import { Personal } from '../personals/personal';
import { PersService } from './personal.service';

@Component({
  selector: 'app-personals',
  templateUrl: './personals.component.html',
  styleUrls: ['./personals.component.css']
})
export class PersonalsComponent implements OnInit {

  departaments: Departament[];
  personals: Personal[];
  selectedHero: Departament;


  stuffes: any[];
  constructor(private depService: DepService, private persService: PersService) {

    //  this.stuffes = [
    //    {
    //       id:0,
    //       firstname:"mark",
    //       lastname:"sanich",
    //       age:31,
    //       department:"CEO"
    //    },
    //    {
    //       id:1,
    //       firstname:"Yuriy",
    //       lastname:"Birukov",
    //       age:12,
    //       department:"sales"
    //    }
       
    // ]
  }
  getDep(): void {
    // this.depService.getDep().then(departaments => this.departaments = departaments);
    this.departaments = this.depService.getDep();
    
  }

  getPers(): void {
    // this.depService.getDep().then(departaments => this.departaments = departaments);
    this.personals = this.persService.getPers();
    
  }


  getDepName(id:number) {
    console.log(this.departaments[id].name);


    return this.departaments[id].name
    // return 'lolka';
  }

  addStuff(firstname:string,lastname:string,age:number,department:number){

     console.log(arguments);
      this.personals.push({id:this.personals.length,firstname:firstname,lastname:lastname,age:age,depo:department});
      console.log(this.personals);
   }


  // delStuff(id:number) {
  //   console.log(id);
  //   this.stuffes.splice(id, 1);
  // }

  //  addStuff(firstname:string,lastname:string,age:number,department:string){

  //    console.log(arguments);
  //     // this.stuffes.push({id:this.stuffes.length,firstname:firstname,lastname:lastname,age:age,department:department});
  //     console.log(this.stuffes);
  //  }


  ngOnInit(): void {
    this.getDep();
    this.getPers();
  }

}
