import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { DepartmentsComponent } from './departments/departments.component';
import { PersonalsComponent } from './personals/personals.component';

import { DepService } from './departments/departments.service';
import { PersService } from './personals/personal.service';

const appRoutes: Routes = [
  { path: 'personal', component: PersonalsComponent},
  { path: 'departament', component: DepartmentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    
    DepartmentsComponent,
    PersonalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DepService, PersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
