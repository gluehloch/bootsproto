import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class Cookie {

    key: String;
    value: String;

    constructor(key: String, value: String) {
        this.key = key;
        this.value = value;
    }

    toString(): String {
        return "Key: " + this.key + ", Value: " + this.value;
    }
}

@Component({
    selector: 'app-impressum',
    templateUrl: './impressum.component.html'
})
export class ImpressumComponent implements OnInit {

    ngOnInit() {
        const allCookies = this.findAllCookies();
        console.dir(allCookies);
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
            const cookieKey = cookieKeyValue[0];
            const cookieValue = cookieKeyValue[1];
            allCookies.push(new Cookie(cookieKey, cookieValue));
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
