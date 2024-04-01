import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { ZitateComponent } from './zitate/zitate.component';
import { ImpressumComponent } from './impressum/impressum.component';

import { CookieConsentSubmit } from './app.cookieconsentsubmit.service';
import { FollowTwitterComponent } from './twitter/FollowTwitterComponent';
import { BlogComponent } from './blog/blog.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
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
                path: 'blog',
                component: BlogComponent
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
        ], { })
    ],
    exports: [
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        HomeComponent,
        ProjekteComponent,
        DownloadComponent,
        BlogComponent,
        ZitateComponent,
        ImpressumComponent,
        FollowTwitterComponent
    ],
    providers: [
        CookieConsentSubmit,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
