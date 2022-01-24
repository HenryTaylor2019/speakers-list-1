import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpeakerModel} from '../../../../shared/models/speaker.model';


// TO DO
// 1. Have search term appear below input after enter
// 2. Have a filter by country dropdown
// 3. Show all speakers toggle


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() public speakers: SpeakerModel[] = [];
    @Output() public searchDataEvent = new EventEmitter();
    @Output() public filterCountryEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }


    searchSpeakers(searchTerm): void {
        const value = searchTerm.target.value;
        const matchingSpeakers = this.speakers.filter(speaker => {
            return speaker.name.first.includes(value) || speaker.name.last.includes(value);
        });
        this.searchDataEvent.emit(matchingSpeakers);
    }

    // filterCountry(option): void {
    //     const value = option;
    //     const matchingSpeakers = this.speakers.filter(speaker => {
    //         return speaker.location.country.includes(value);
    //     });
    //     matchingSpeakers.splice(matchingSpeakers.length, -1);
    //     console.log(matchingSpeakers)
    //     this.filterCountryEvent.emit(matchingSpeakers);
    //     // console.log(option)
    // }
}
