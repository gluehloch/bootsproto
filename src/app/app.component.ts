/*eslint-env node*/

import { Component, OnInit, OnDestroy, signal } from '@angular/core';

import { Subscription } from 'rxjs';
import { CookieService } from './cookie/cookie.service';

import { CookieData, CookieConsentSubmit } from './app.cookieconsentsubmit.service';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [NavbarComponent, RouterOutlet],
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
