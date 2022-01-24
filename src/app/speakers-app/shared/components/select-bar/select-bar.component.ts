import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {SpeakerModel} from '../../../../../shared/models/speaker.model';

@Component({
    selector: 'app-select-bar',
    templateUrl: './select-bar.component.html',
    styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent implements OnChanges {
    @Input() public speakers: SpeakerModel[] = [];
    @Output() public filterCountryEvent = new EventEmitter();
    public speakersCountries = [];

    ngOnChanges(): void {
        // Awaiting speakerData from observable
        this.orderCountries();
    }

    orderCountries(): void {
        // Remove duplicates from countries list
        this.speakers.map(speaker => {
            if (!this.speakersCountries.includes(speaker.location.country)) {
                this.speakersCountries.push(speaker.location.country);
            }
        });
        this.speakersCountries.sort();
    }

    submitCountry(option): void {
        const value = option;
        this.filterCountryEvent.emit(value);
    }
}
