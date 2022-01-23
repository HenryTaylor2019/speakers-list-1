import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpeakersPageComponent} from './speakers-page/speakers-page.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';

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
    ],
    declarations: [HomeComponent],
    exports: [RouterModule, AppRoutingModule]
})

export class SpeakersAppModule {

}
