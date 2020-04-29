import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class CookieData {
    website = environment.website;
    acceptCookies: boolean;

    constructor(acceptCookies: boolean) {
        this.acceptCookies = acceptCookies;
    }
}

export class DataTimeJson {
    dataeTime: number;
}

@Injectable()
export class CookieConsentSubmit {
    constructor(private http: HttpClient) {
    }

    sendCookieOptions(cookieData: CookieData) {
        return this.http.post<boolean>(
            environment.cookieserviceUrl,
            cookieData,
            {headers: this.createHeader()}
        ).subscribe(response => {
            console.log('CookieConsentSubmit: ' + response);
        }, error => {
            console.error('CookieConsentSubmit Error:' + error);
        });
    }

    private createHeader() {
        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Access-Control-Allow-Origin', '*');
        return headers;
    }

}
