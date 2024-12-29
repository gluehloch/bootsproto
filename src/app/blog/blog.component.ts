import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { MarkdownComponent } from 'ngx-markdown';

import { environment } from '../../environments/environment';
import { SpinnerComponent } from '../spinner/spinner.component';

import { LinkInterceptorDirective } from './LinkInterceptorDirective';


@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    imports: [MarkdownComponent, SpinnerComponent],
    hostDirectives: [LinkInterceptorDirective]
})
export class BlogComponent implements OnInit {

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
        this.ready = false;
        this.getResource(_redirectUrl);
    };

    ready = false;
    blog: string = '';
    index: any;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Change', this.redirect);
    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            console.log("data", data);
        });
   }

    private getResource(route: string): void {
        this.http.get(environment.findUrl + route, {responseType: 'text'}).subscribe({
            next: data => {
                this.blog = data;
            },
            error: error => {
                console.error('There was an error!', error);
            },
            complete: () => {
                console.log('Completed');
                this.ready = true;
            }
        });
    }

}
