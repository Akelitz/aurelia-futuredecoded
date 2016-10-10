import {speakersData} from '/_services/speakersData';
import moment from 'moment';

export class Repository {
    getAllSpeakers() {
        var promise = new Promise((resolve, reject) => {
            if (!this.speakers) {
                speakersData.sort((a, b) => a.lastName >= b.lastName ? 1 : -1 );
                this.speakers = speakersData;
            }
            resolve(this.speakers);
        });
        return promise;
    }
}