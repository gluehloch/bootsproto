import './polyfills';

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideRouter, UrlSegment, withComponentInputBinding } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';

import { CookieConsentSubmit } from './app/app.cookieconsentsubmit.service';
import { BlogComponent } from './app/blog/blog.component';
import { AppComponent } from './app/app.component';
import { ImpressumComponent } from './app/impressum/impressum.component';
import { ZitateComponent } from './app/zitate/zitate.component';
import { DownloadComponent } from './app/download/download.component';
import { ProjekteComponent } from './app/projekte/projekte.component';
import { HomeComponent } from './app/home/home.component';

import { provideMarkdown } from 'ngx-markdown';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideMarkdown(),
        importProvidersFrom(BrowserModule, FormsModule),
        CookieConsentSubmit,
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([
            {
                path: '',
                component: HomeComponent
            },
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
                matcher: (url) => {
                    if (url.length === 1 && url[0].path.match(/^@redirect=.+$/gm)) {
                        return {consumed: url, posParams: {redirect: new UrlSegment(url[0].path.slice(1), {})}};
                    }
                    return null;
                },
                component: BlogComponent
            }
        ], withComponentInputBinding())
    ]
})
    .catch(err => console.log(err));
