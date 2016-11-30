import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
	depList:string[];
	
  constructor() { 
   this.depList = ['sales', 'CEO']  
  }
  
  createDep(namedep:string) {
  	(namedep) ? this.depList.push(namedep):"";
  }
  
  deleteDep(namedep:string) {
  	(namedep) ? this.depList.push(namedep):"";
  }

  ngOnInit() {
  }

}
