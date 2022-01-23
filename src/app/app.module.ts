import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpeakersPageComponent} from './components/speakers-page/speakers-page.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        SpeakersPageComponent,
        SearchBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
