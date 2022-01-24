import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    public onHomePage = true;
    public routes = {
        home: '',
        speakers: '/speakers'
    };

    constructor(private router: Router) {
    }

    toggleNav(): void {
        this.router.url === this.routes.home ? this.onHomePage = this.onHomePage : this.onHomePage = !this.onHomePage;
    }
}
