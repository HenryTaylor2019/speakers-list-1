import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpeakersPageComponent} from './speakers-app/speakers-page/speakers-page.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchBarComponent} from './speakers-app/shared/components/search-bar/search-bar.component';
import {SpeakersAppModule} from './speakers-app/speakers-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        SpeakersPageComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SpeakersAppModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
