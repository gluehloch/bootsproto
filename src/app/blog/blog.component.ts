import { MarkdownComponent } from 'ngx-markdown';

import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LinkInterceptorDirective } from './LinkInterceptorDirective';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    imports: [MarkdownComponent],
    hostDirectives: [LinkInterceptorDirective]
})
export class BlogComponent implements OnInit {

    readonly url = environment.gitUrl;

    @ViewChild('markdown', { static: false }) markdownElement!: ElementRef;

    // path=tools/daily-git.md
    // path=home.md
    // readonly url = 'https://gluehloch.de/git/repository/browse?path=';
    // readonly url = 'http://localhost:8080/repository/find?file=';

    @Input()
    set redirect(redirectUrl: string) {
        let _redirectUrl = redirectUrl;
        if (redirectUrl) {
            _redirectUrl = _redirectUrl + '.md';
        } else {
            _redirectUrl = 'home.md';
        }
        this.getResource(_redirectUrl);
    };

    blog: string = '';
    item: string = '';
    hrefs: string[] = [];

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Change', this.redirect);
    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            console.log("data :" + JSON.stringify(data));
        });
   }

    private getResource(route: string) {
        this.http.get(this.url + route, {responseType: 'text'}).subscribe(data => {
            this.blog = data;
        });
    }

}
