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

    _redirect: string = '';

    @Input()
    set redirect(redirectUrl: string) {
        this._redirect = redirectUrl;
        this.getResource(redirectUrl + '.md');

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
        const blogger = this.redirect
            ? this.redirect + '.md'
            : 'home.md';


        this.route.params.subscribe(data => {
          console.log("data :" + JSON.stringify(data));
        });

        this.getResource(blogger);
    }

    private getResource(route: string) {
        this.http.get(this.url + route, {responseType: 'text'}).subscribe(data => {
            this.blog = data;
        });
    }

}
