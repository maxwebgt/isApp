import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DepartmentsComponent } from './departments/departments.component';
import { PersonalsComponent } from './personals/personals.component';

@NgModule({
  declarations: [
    AppComponent,
    
    DepartmentsComponent,
    PersonalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
