import { MarkdownComponent } from 'ngx-markdown';

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LinkInterceptorDirective } from './LinkInterceptor';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    imports: [MarkdownComponent],
    hostDirectives: [LinkInterceptorDirective]
})
export class BlogComponent implements OnInit {

    @ViewChild('markdown', { static: false }) markdownElement!: ElementRef;

    // path=tools/daily-git.md
    // path=home.md
    readonly url = 'https://gluehloch.de/git/repository/browse?path=';

    @Input() redirect!: string;

    blog: string = '';
    item: string = '';
    hrefs: string[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        const blogger = this.redirect
            ? this.redirect + '.md'
            : 'home.md';

        this.http.get(this.url + blogger, {responseType: 'text'}).subscribe(data => {
            this.blog = data;

            this.hrefs = this.extractHrefs(this.blog);
            console.dir(this.hrefs);

            this.hrefs.forEach(href => {
                if (!href.startsWith('http')) {
                    const newHref = 'http://localhost:4200/blog?redirect=' + encodeURI(href);
                    this.blog = this.blog.replace("href=\"" + href + "\"", "href=\"" + newHref + "\"");
                }
            });
        });
    }

    private extractHrefs(html: string): string[] {
        const hrefs: string[] = [];
        const regex = /href="([^"]*)"/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            hrefs.push(match[1]);
        }
        return hrefs;
    }

}
