/*eslint-env node*/

import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgcCookieConsentService, NgcInitializeEvent, NgcStatusChangeEvent, NgcNoCookieLawEvent } from 'ngx-cookieconsent';
// What is 'NgcCookieOptions'?

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from './cookie/cookie.service';

import { CookieData, CookieConsentSubmit } from './app.cookieconsentsubmit.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

    private popupOpenSubscription: Subscription;
    private popupCloseSubscription: Subscription;
    private initializeSubscription: Subscription;
    private statusChangeSubscription: Subscription;
    private revokeChoiceSubscription: Subscription;
    private noCookieLawSubscription: Subscription;

    private cookieService = new CookieService();

    constructor(private ccService: NgcCookieConsentService,
            private translateService: TranslateService,
            private cookieConsentSubmit: CookieConsentSubmit) {
    }

    ngOnInit(): void {
        this.translateService.addLangs(['en', 'de']);
        this.translateService.setDefaultLang('de');

        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|de/) ? browserLang : 'de');

        this.translateService
            .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
            .subscribe(data => {
                this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
                this.ccService.getConfig().content.header = data['cookie.header'];
                this.ccService.getConfig().content.message = data['cookie.message'];
                this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
                this.ccService.getConfig().content.allow = data['cookie.allow'];
                this.ccService.getConfig().content.deny = data['cookie.deny'];
                this.ccService.getConfig().content.link = data['cookie.link'];
                this.ccService.getConfig().content.policy = data['cookie.policy'];
                this.ccService.destroy();
                this.ccService.init(this.ccService.getConfig());
        });

        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
            () => {
                console.log('popupOpen');
                // you can use this.ccService.getConfig() to do stuff...
            });

        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
            () => {
                console.log('popupClose');
                // you can use this.ccService.getConfig() to do stuff...
            });

        this.initializeSubscription = this.ccService.initialize$.subscribe(
            (event: NgcInitializeEvent) => {
                console.log('initialize');
                // you can use this.ccService.getConfig() to do stuff...
            });

        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
            (event: NgcStatusChangeEvent) => {
                console.log('statusChange: ' + event.status + ', browser: ' +  navigator.userAgent + ', date: ' + Date.now());

                const cookieData = new CookieData(event.status === 'allow' ? true : false);
                const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                if (event.status === 'allow') {
                    this.cookieService.put('cookieconsent', 'allow', {'expires': tomorrow});
                } else {
                    this.cookieService.remove('cookieconsent');
                }
                this.cookieConsentSubmit.sendCookieOptions(cookieData);

                // you can use this.ccService.getConfig() to do stuff...
            });

        this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
            () => {
                console.log('revokeChoice');
                // you can use this.ccService.getConfig() to do stuff...
            });

        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
            (event: NgcNoCookieLawEvent) => {
                console.log('noCookieLaw');
                // you can use this.ccService.getConfig() to do stuff...
            });
    }

    ngOnDestroy(): void {
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    }

}
