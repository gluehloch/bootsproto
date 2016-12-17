import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
