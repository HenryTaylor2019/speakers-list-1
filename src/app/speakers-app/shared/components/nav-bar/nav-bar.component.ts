import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    public onHomePage: boolean;
    public routes = {
        home: '',
        speakers: '/speakers'
    };

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        // this.toggleNav(this.router.url)
    }

    toggleNav(): void {
        this.router.url === this.routes.home ? this.onHomePage = true : this.onHomePage = !this.onHomePage;
    }
}
