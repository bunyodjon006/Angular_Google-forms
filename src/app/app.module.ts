import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Modal2Component } from './modal2/modal2.component';
import { Modal1Component } from './modal1/modal1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Modal2Component,
    Modal1Component
  ],
  imports: [
 
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
