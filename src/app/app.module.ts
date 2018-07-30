import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { LebenslaufComponent } from './lebenslauf/lebenslauf.component';
import { HomeComponent } from './home/home.component';
import { ProjekteComponent } from './projekte/projekte.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'projekte',
                component: ProjekteComponent
            },
            {
                path: 'lebenslauf.pdf',
                component: LebenslaufComponent,
            },
            {
                path: '**',
                component: HomeComponent
            }
        ])
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        HomeComponent,
        ProjekteComponent,
        LebenslaufComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
