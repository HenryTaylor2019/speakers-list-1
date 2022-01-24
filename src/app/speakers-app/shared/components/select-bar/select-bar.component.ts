import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpeakerModel} from '../../../../../shared/models/speaker.model';

@Component({
    selector: 'app-select-bar',
    templateUrl: './select-bar.component.html',
    styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent implements OnInit {
    @Input() public speakers: SpeakerModel[] = [];
    @Output() public filterCountryEvent = new EventEmitter();

    ngOnInit(): void {
        const speakersCountries = []
        this.speakers.map(speaker => {
            speakersCountries.push(speaker.location.country)
        });
    }

    submitCountry(option): void {
        const value = option;
        this.filterCountryEvent.emit(value);
    }
}
