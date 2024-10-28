import './polyfills';

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { BlogComponent } from './app/blog/blog.component';
import { AppComponent } from './app/app.component';
import { ImpressumComponent } from './app/impressum/impressum.component';
import { ZitateComponent } from './app/zitate/zitate.component';
import { DownloadComponent } from './app/download/download.component';
import { ProjekteComponent } from './app/projekte/projekte.component';
import { HomeComponent } from './app/home/home.component';
import { provideRouter } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CookieConsentSubmit } from './app/app.cookieconsentsubmit.service';


if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule),
        CookieConsentSubmit,
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'blog',
                component: BlogComponent
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
    ]
})
    .catch(err => console.log(err));
