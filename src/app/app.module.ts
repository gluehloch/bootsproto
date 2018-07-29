import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { LebenslaufComponent } from './lebenslauf/lebenslauf.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            /*
            {
              path: '',
              redirectTo: 'home'
            },*/
            {
                path: '',
                component: AppComponent
            },
            {
                path: 'profil_andre_winkler.pdf',
                component: LebenslaufComponent,
            }
        ])
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        LebenslaufComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
