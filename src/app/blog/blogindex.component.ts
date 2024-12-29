import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { MarkdownComponent } from "ngx-markdown";

import { environment } from '../../environments/environment';

import { LinkInterceptorDirective } from "./LinkInterceptorDirective";

type Content = {
    path: string;
    fileName: string;
    type: 'MRKDOWN' | 'TXT' | 'PNG' | 'UNKNOWN';
}

@Component({
    selector: 'index',
    templateUrl: './blogindex.component.html',
    imports: [MarkdownComponent],
    hostDirectives: [LinkInterceptorDirective]
})
export class BlogIndexComponent implements OnInit {

    index: Array<Content> = [];

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            console.log("data", data);
        });
        this.getIndex();
    }

    private getIndex(): void {
        this.http.get(environment.gitUrl + '/index').subscribe({
            next: data => {
                this.index = data as any as Content[];
            },
            error: error => {
                console.error('There was an error!', error);
            },
            complete: () => {
                console.log('Completed');
            }
        });
    }

}