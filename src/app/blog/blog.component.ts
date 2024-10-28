import { Component, OnInit } from '@angular/core';
import { HtmlRenderer, Parser } from 'commonmark';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

    blog: string = '';
    item: string = '';
    hrefs: string[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        // this.http.get('assets/blog1.md', {responseType: 'text'}).subscribe(data => {
        this.http.get('https://raw.githubusercontent.com/wiki/gluehloch/java-examples/home.md', {responseType: 'text'}).subscribe(data => {
            this.blog = data;

            var reader = new Parser();
            var writer = new HtmlRenderer();

            var parsed = reader.parse(this.blog); // parsed is a 'Node' tree
            // transform parsed if you like...
            this.item = writer.render(parsed);

            this.hrefs = this.extractHrefs(this.item);
            console.dir(this.hrefs);

            this.hrefs.forEach(href => {
                if (!href.startsWith('http')) {
                    const newHref = 'redirect=' + encodeURI(href);
                    this.item = this.item.replace("href=\"" + href + "\"", "href=\"" + newHref + "\"");
                }
            });
        });
    }

    extractHrefs(html: string): string[] {
        const hrefs: string[] = [];
        const regex = /href="([^"]*)"/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            hrefs.push(match[1]);
        }
        return hrefs;
    }

}
