import {Component, OnInit} from '@angular/core';
import {SpeakerModel} from '../../shared/models/speaker.model';
import {HttpClient} from '@angular/common/http';
import {SpeakersService} from '../../shared/services/speakers.service';

@Component({
    selector: 'app-speakers-page',
    templateUrl: './speakers-page.component.html',
    styleUrls: ['./speakers-page.component.scss']
})
export class SpeakersPageComponent implements OnInit {
    public speakers: SpeakerModel[] = [];
    public searchResults: SpeakerModel[] = [];
    public isFetching: boolean;

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
        });
    }

    updateResults(newItem: SpeakerModel[]) {
        this.searchResults = newItem;
        console.log(this.searchResults)
    }
}
