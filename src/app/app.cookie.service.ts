import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class CookieData {
    acceptCookies: boolean;
}

export class DataTimeJson {
    dataeTime: number;
}

@Injectable()
export class CookieService {
    constructor(private http: HttpClient) {
    }

    sendCookieOptions(cookieData: CookieData) {
        return this.http.post<boolean>(
            'http://192.168.99.100:9090/registrationservice/cookie/confirmCookie'
            /*'https://cookie.gluehloch.de/registrationservice/cookie/confirmCookie'*/,
            cookieData,
            {headers: this.createHeader()}
        ).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }

    private createHeader() {
        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Access-Control-Allow-Origin', '*');
        return headers;
    }

}
