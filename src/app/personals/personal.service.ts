import { Injectable } from '@angular/core';

import { Personal } from './personal';
import { PERSONALS } from './personals.data';

@Injectable()
export class PersService {

  getPers(): Personal[] {

    return PERSONALS;
  };

  // updPers(id: number, firstname: string, lastname: string, age: number, depo: number): Personal[] {
  //   PERSONALS.filter(function(element){
  //     if (element.id === id )
  //     {
  //       element.firstname = firstname;
  //       element.lastname = lastname;
  //       element.age = age;
  //       element.depo = depo;
  //     }

  //   });
  //   return PERSONALS;
  // } ;

updPersDepoAll(oldid: number, newid: number) {
  PERSONALS.filter(function(element) {
    if (element.depo === oldid) {
      element.depo = newid;
    }
  })

  return PERSONALS;
}


  create(id: number, firstname: string, lastname: string, age: number, depo: number): Personal[] {
     PERSONALS.push({
          id:PERSONALS.length,
          firstname: firstname,
          lastname: lastname,
          age: age,
          depo: depo
     })
     return PERSONALS;
  };


  delete(idd: number): Personal[] {
    console.log(idd);
    PERSONALS.filter(function(asd, inde) {
      if (asd.id === idd) {
        PERSONALS.splice(inde, 1);
      }
    });
    return PERSONALS;
  };

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
