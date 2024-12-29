import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { MarkdownComponent } from "ngx-markdown";

import { LinkInterceptorDirective } from "./LinkInterceptorDirective";

@Component({
    selector: 'index',
    templateUrl: './blogindex.component.html',
    imports: [MarkdownComponent],
    hostDirectives: [LinkInterceptorDirective]
})
export class BlogIndexComponent implements OnInit {

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(data => {
            console.log("data", data);
        });
   }

}
