import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpeakersPageComponent} from './speakers-page/speakers-page.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatProgressBarModule,
        CommonModule,
        MatStepperModule,
        MatChipsModule,
        ReactiveFormsModule,
        MatListModule,
        MatMenuModule,
        BrowserAnimationsModule
    ],
    declarations: [HomeComponent, NavBarComponent],
    exports: [RouterModule, AppRoutingModule, NavBarComponent]
})

export class SpeakersAppModule {

}
