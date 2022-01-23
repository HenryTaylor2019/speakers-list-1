import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpeakersPageComponent} from './speakers-page/speakers-page.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'speakers',
        component: SpeakersPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [HomeComponent, NavBarComponent],
    exports: [RouterModule, AppRoutingModule, NavBarComponent]
})

export class SpeakersAppModule {

}
