import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpeakerModel} from "../../models/speaker.model";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() public speakers: SpeakerModel[] = [];
    @Output() public searchDataEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }


    searchSpeakers(searchTerm): void {
        const value = searchTerm.target.value;
        const matchingResults = this.speakers.filter(val => {
            return val.name.first.includes(value) || val.name.last.includes(value);
        });
        this.searchDataEvent.emit(matchingResults);
    }
}
