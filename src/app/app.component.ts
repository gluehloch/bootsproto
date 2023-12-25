/*eslint-env node*/

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { CookieService } from './cookie/cookie.service';

import { CookieData, CookieConsentSubmit } from './app.cookieconsentsubmit.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

    private cookieService = new CookieService();

    constructor(private cookieConsentSubmit: CookieConsentSubmit) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}
