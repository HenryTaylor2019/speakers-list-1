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
    public speakerCountries = [];
    public isFetching: boolean;
    public searchText: string;
    public searchFailed = false;
    public searchSubmitted = false;
    public selectedSpeakers = [];

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
            this.searchResults.map(searchResult => {
                this.speakerCountries.push(searchResult.location.country)
            });
        });
    }

    moveSpeakerToSelected(name): void {
        this.searchResults.map((speaker, i) => {
            if (speaker.name.first === name) {
                this.searchResults.splice(i, 1);
                this.speakers.splice(i, 1);
                this.selectedSpeakers.push(speaker);
            }
        });
    }

    showAllSpeakers(): void {
        this.searchResults = this.speakers;
        this.searchFailed = false;
        this.searchSubmitted = false;
    }

    filterByCountry(selectedCountry): void {
        this.searchResults = this.speakers.filter(speaker => {
            return speaker.location.country === selectedCountry;
        });
        this.searchFailed = false;
        this.searchSubmitted = false;
    }

    filterBySearch(eventData): void {
        this.searchText = eventData.target.value;
        if (this.searchText.length < 1) {
            this.searchResults = [];
        } else {
            this.searchText = this.searchText.toLocaleLowerCase();
            this.searchResults = this.speakers.filter(speaker => {
                return speaker.name.first.toLocaleLowerCase().includes(this.searchText) || speaker.name.last.toLocaleLowerCase().includes(this.searchText);
            });
        }
        this.searchResults.length < 1 ? this.searchFailed = true : this.searchFailed = false;
        this.searchSubmitted = true;
    }
}
