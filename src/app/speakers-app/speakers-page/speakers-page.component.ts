import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpeakerModel} from '../../../shared/models/speaker.model';
import {SpeakersService} from '../../../shared/services/speakers.service';

@Component({
    selector: 'app-speakers-page',
    templateUrl: './speakers-page.component.html',
    styleUrls: ['./speakers-page.component.scss']
})
export class SpeakersPageComponent implements OnInit {
    public speakers: SpeakerModel[] = [];
    public searchResults: SpeakerModel[] = [];
    public isFetching: boolean;
    public searchFailed = false;

    constructor(private http: HttpClient, private speakersService: SpeakersService) {
    }

    ngOnInit(): void {
        this.onGetSpeakerData();
    }

    onGetSpeakerData(): void {
        this.isFetching = true;
        this.speakersService.onGetSpeakerData().subscribe(speakersData => {
            this.isFetching = false;
            this.speakers = speakersData[0];
            this.searchResults = speakersData[0];
        });
    }

    showAllSpeakers(): void {
        this.searchResults = this.speakers;
        this.searchFailed = false;
    }

    filterByCountry(selectedCountry): void {
        this.searchResults = this.speakers.filter(speaker => {
            return speaker.location.country === selectedCountry;
        });
        this.searchFailed = false;
    }

    filterBySearch(eventData): void {
        let searchText = eventData.target.value;
        if (searchText.length < 1) {
            this.searchResults = [];
        } else {
            searchText = searchText.toLocaleLowerCase();
            this.searchResults = this.speakers.filter(speaker => {
                return speaker.name.first.toLocaleLowerCase().includes(searchText) || speaker.name.last.toLocaleLowerCase().includes(searchText);
            });
        }
        this.searchResults.length < 1 ? this.searchFailed = true : this.searchFailed = false;
    }
}
