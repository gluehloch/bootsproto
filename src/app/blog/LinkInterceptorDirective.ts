import { Directive, HostListener } from '@angular/core';
import { Router } from "@angular/router";

@Directive({
    selector: '[appInterceptRouterlink]'
})
export class LinkInterceptorDirective {

    constructor(private router: Router) { }

    @HostListener("click", ["$event"])
    public onClick(e: MouseEvent): void {
        const srcElem = e.target;
        if (srcElem instanceof HTMLAnchorElement) {
            const baseURI = srcElem.baseURI;
            const href = srcElem.href;

            if (href.startsWith(baseURI)) {
                const baseURILength = baseURI.length;
                const routerlink = href.substring(baseURILength);
                e.preventDefault();
                e.stopPropagation();
                this.router.navigate(['/blog?redirect=' + routerlink]);
                // this.router.navigate(['/home']);
            }
        }
    }
}
