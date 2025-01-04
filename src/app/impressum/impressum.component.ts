import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';
import { CookieConsentSubmit } from '../app.cookieconsentsubmit.service';
import { NgIf, NgFor } from '@angular/common';
import { FollowTwitterComponent } from '../twitter/FollowTwitterComponent';
import { FormsModule } from '@angular/forms';

export class Cookie {

    key: string;
    value: string;

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }

    toJSON(): Object {
        return JSON.parse(this.value);
    }

    toString(): String {
        return 'Key: ' + this.key + ', Value: ' + this.value;
    }
}

@Component({
    selector: 'app-impressum',
    templateUrl: './impressum.component.html',
    styleUrls: ['./impressum.css'],
    imports: [FormsModule, FollowTwitterComponent, NgIf, NgFor]
})
export class ImpressumComponent implements OnInit {

    cookies: Array<Cookie> = [];
    private cookieService = new CookieService();

    constructor(private cookieConsentSubmit: CookieConsentSubmit) {
    }

    ngOnInit(): void {
        this.refresh();
        /*
        console.dir(this.cookies);
        for (let i = 0; i < this.cookies.length; i++) {
            if (this.cookies && this.cookies[i]) {
                console.dir(this.cookies[i].toJSON());
            }
        }
        */
    }

    refresh(): void {
        this.cookies = this.findAllCookies();
    }

    remove(key: string): void {
        console.log('Remove cookie: ' + key);
        this.cookieService.remove(key);
        this.refresh();
    }

    private cutSpaces(key: String): String {
        while (key.charAt(0) === ' ') {
            key = key.substring(1);
        }
        return key;
    }

    hasCookies(): boolean {
        return this.cookies.length > 0;
    }

    accept(): void {

    }

    deny(): void {
    }

    private findAllCookies(): Cookie[] {
        const moreCookies = this.cookieService.getAll();
        const cookiesAllowed = this.cookieService.get('cookieconsent');
        console.log(moreCookies, cookiesAllowed);

        const decodedCookies = decodeURIComponent(document.cookie);
        const cookies = decodedCookies.split(';');
        const allCookies = new Array<Cookie>();
        for (let i = 0; i < cookies.length; i++) {
            const normalizedCookie = this.cutSpaces(cookies[i]);
            const cookieKeyValue = normalizedCookie.split('=');
            if (cookieKeyValue[0]) {
                allCookies.push(new Cookie(cookieKeyValue[0], cookieKeyValue[1]));
            }
        }
        return allCookies;
    }

    private findCookie(cname: String): String {
        const name = cname + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

}
