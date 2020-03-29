import { Component, OnInit } from '@angular/core';

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
    templateUrl: './impressum.component.html'
})
export class ImpressumComponent implements OnInit {

    cookies: Array<Cookie>;

    ngOnInit() {
        this.cookies = this.findAllCookies();
        console.dir(this.cookies);

        for (let i = 0; i < this.cookies.length; i++) {
            console.dir(this.cookies[i].toJSON());
        }
    }

    private cutSpaces(key: String): String {
        while (key.charAt(0) === ' ') {
            key = key.substring(1);
        }
        return key;
    }

    findAllCookies(): Cookie[] {
        const decodedCookies = decodeURIComponent(document.cookie);
        const cookies = decodedCookies.split(';');
        const allCookies = [];
        for (let i = 0; i < cookies.length; i++) {
            const normalizedCookie = this.cutSpaces(cookies[i]);
            const cookieKeyValue = normalizedCookie.split('=');
            allCookies.push(new Cookie(cookieKeyValue[0], cookieKeyValue[1]));
        }
        return allCookies;
    }

    findCookie(cname: String) {
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
