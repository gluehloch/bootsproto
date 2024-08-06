import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    standalone: true
})
export class DownloadComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openPdf() {
        /*
        this.router.navigate(['/externalRedirect', { externalUrl: 'profil_andre_winkler.pdf' }], {
            skipLocationChange: true,
        });
        */
        window.open('./assets/profil_andre_winkler.pdf', 'nextTarget');
    }

    openDoc() {
        window.open('./assets/profil_andre_winkler.doc', 'nextTarget');
    }

    openGulp() {
        window.open('https://www.gulp.de/gulp2/home/profil/andrewinkler?11', 'nextTarget');
    }

    openXing() {
        window.open('https://www.xing.com/profile/Andre_Winkler', 'nextTarget');
    }

    openBlog() {
        window.open('https://kombjuda.blogspot.de/', 'nextTarget');
    }

    openScrumMaster() {
        window.open('./assets/professional-scrum-master-1.pdf');
    }

}
