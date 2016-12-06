import { Injectable } from '@angular/core';

import { Personal } from './personal';
import { PERSONALS } from './personals.data';

@Injectable()
export class PersService {

  getPers(): Personal[] {
      
    return PERSONALS;
  };
  
  create(id: number, firstname: string, lastname: string, age: number, depo: number): Personal[] {
    
     PERSONALS.push({id:PERSONALS.length, firstname: firstname, lastname: lastname,age: age, depo: depo}) 
     return PERSONALS;
  };


//   delete(idd: number): Departament[] {
//       console.log(idd);
//      DEPARTAMENTS.filter(function(asd, inde) {
//      if (asd.id === idd) {
//          DEPARTAMENTS.splice(inde, 1);
//      }
//      });    
//      return DEPARTAMENTS;
//   };

  // See the "Take it slow" appendix
 
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/