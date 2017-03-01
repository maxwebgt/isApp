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


  }
  getDep(): void {
    this.departaments = this.depService.getDep();
  }

  getPers(): void {
    this.personals = this.persService.getPers();

  }

  getDepName(id:number) {
    console.log(this.departaments[id].name);
    return this.departaments[id].name
  }

  addStuff(firstname:string,lastname:string,age:number,department:number){
    console.log(arguments);
    this.personals.push({id:this.personals.length,firstname:firstname,lastname:lastname,age:age,depo:department});
    console.log(this.personals);
   }


  delStuff(id:number) {
    console.log(id);
    this.personals = this.persService.delete(id);
  }

  ngOnInit(): void {
    this.getDep();
    this.getPers();
  }

}
