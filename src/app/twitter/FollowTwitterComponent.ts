import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'twitter-follow-button',
    template: `<a href="https://twitter.com/andrewinkler?ref_src=twsrc%5Etfw" [attr.data-text]="text" [attr.data-url]="url" class="twitter-follow-button"></a>`
})

export class FollowTwitterComponent implements AfterViewInit {
    @Input() url = location.href;
    @Input() text = '';

    constructor() {
        // load twitter sdk if required
        const url = 'https://platform.twitter.com/widgets.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            const script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
        // render tweet button
        window['twttr'] && window['twttr'].widgets.load();
    }
}
