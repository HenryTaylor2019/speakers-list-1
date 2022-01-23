import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpeakersPageComponent} from './speakers-app/speakers-page/speakers-page.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchBarComponent} from './speakers-app/shared/components/search-bar/search-bar.component';
import {SpeakersAppModule} from './speakers-app/speakers-app.module';

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
        SpeakersAppModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
