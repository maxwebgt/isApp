import { Injectable } from '@angular/core';

import { Departament } from './departments';
import { DEPARTAMENTS } from './departments.data';

@Injectable()
export class DepService {
//   getDep(): Promise<Departament[]> {
      
//     return Promise.resolve(DEPARTAMENTS);
//   };
  getDep(): Departament[] {
      
    return DEPARTAMENTS;
  };
  create(name: string): Departament[] {
    console.log(DEPARTAMENTS);
     DEPARTAMENTS.push({id:DEPARTAMENTS.length, name: name}) 
     return DEPARTAMENTS;
  };
  delete(idd: number): Departament[] {
      console.log(idd);
     DEPARTAMENTS.filter(function(asd, inde) {
     if (asd.id === idd) {
         DEPARTAMENTS.splice(inde, 1);
     }
     });
    //  DEPARTAMENTS.splice(idd, 1);
     return DEPARTAMENTS;
  };

  // See the "Take it slow" appendix
 
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/