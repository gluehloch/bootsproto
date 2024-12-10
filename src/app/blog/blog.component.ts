import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

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

            var reader = new Parser();
            var writer = new HtmlRenderer();

            var parsed = reader.parse(this.blog); // parsed is a 'Node' tree
            // transform parsed if you like...
            this.item = writer.render(parsed);

            this.hrefs = this.extractHrefs(this.item);
            console.dir(this.hrefs);

            this.hrefs.forEach(href => {
                if (!href.startsWith('http')) {
                    const newHref = 'http://localhost:4200/blog?redirect=' + encodeURI(href);
                    this.item = this.item.replace("href=\"" + href + "\"", "href=\"" + newHref + "\"");
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
