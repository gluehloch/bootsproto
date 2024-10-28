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

            var forEach = Array.prototype.forEach;
            var links = document.getElementsByTagName('a');
            forEach.call(links, function (link) {
                link.onclick = function () {
                    console.log('Clicked');
                }
            
            });            
        });
    }

}
