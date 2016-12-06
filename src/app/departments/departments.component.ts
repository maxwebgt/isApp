import { Component, OnInit } from '@angular/core';

import { Departament } from './departments';
import { DepService } from './departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
  
})
export class DepartmentsComponent implements OnInit {

  departaments: Departament[];  
  editid: number;
  editname: string;
  constructor(private depService: DepService) { }

  getDep(): void {
    // this.depService.getDep().then(departaments => this.departaments = departaments);
    this.departaments = this.depService.getDep();
    
  }

  addDep(name: string): void {
    name = name.trim();
    if (!name) { return; }
     this.departaments = this.depService.create(name);
  }

  delDep(id: number): void {
     this.departaments = this.depService.delete(id);
  }
  editDep(id: number, name: string) {
    if (id < 0 ) {
      this.editid = id;
      this.editname = '';
    }
    else
    {
      this.editid = id;
      this.editname = name;
    }
  }

  ngOnInit(): void {
    this.getDep();
  }

}
