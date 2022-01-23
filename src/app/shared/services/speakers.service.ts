import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SpeakerModel} from '../models/speaker.model';

@Injectable({providedIn: 'root'})
export class SpeakersService {
    private endpoint = 'https://randomuser.me/api/?results=20&page=1\'';

    constructor(private http: HttpClient) {
    }

    onGetSpeakerData() {
        return this.http.get<{ [key: string]: SpeakerModel }>(this.endpoint)
            .pipe(map(responseData => {
                        const speakersArray = [];
                        for (const key in responseData) {
                            if (responseData.hasOwnProperty(key)) {
                                speakersArray.push(responseData[key]);
                            }
                        }
                        return speakersArray;
                    }
                )
            );
    }
}
