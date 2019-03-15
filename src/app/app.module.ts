import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { ZitateComponent } from './zitate/zitate.component';
import { ImpressumComponent } from './impressum/impressum.component';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
    cookie: {
        domain: 'localhost:4200'
    },
    palette: {
        popup: {
            background: '#000'
        },
        button: {
            background: '#f1d600'
        }
    },
    theme: 'edgeless',
    type: 'opt-out',
    content: {
        message: "Diese Webseite verwendet Cookies.",
        dismiss: "Verstanden",
        deny: "Verweigern",
        allow: "Erlauben",
        link: "Mehr Infos",
        href: "localhost:4200",
        policy: "Cookie Policy"
    }
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgcCookieConsentModule.forRoot(cookieConfig),
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
                path: 'download',
                component: DownloadComponent
            },
            {
                path: 'zitate',
                component: ZitateComponent
            },
            {
                path: 'impressum',
                component: ImpressumComponent
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
        DownloadComponent,
        ZitateComponent,
        ImpressumComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
