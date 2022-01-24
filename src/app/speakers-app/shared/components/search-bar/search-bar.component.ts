import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SpeakerModel} from '../../../../../shared/models/speaker.model';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    @Input() public speakers: SpeakerModel[] = [];
    @Output() public searchDataEvent = new EventEmitter();

    submitSearch(searchTerm): void {
        this.searchDataEvent.emit(searchTerm);
    }
}
