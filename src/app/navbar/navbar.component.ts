// core/navbar.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    show = false;

    toggleCollapse() {
        this.show = this.show ? false : true;
        // this.collapse = this.collapse === 'open' ? 'closed' : 'open';
    }

    closeCollapse() {
        this.show = false;
    }

}
