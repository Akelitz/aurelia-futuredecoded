import {inject} from 'aurelia-framework';
import {Repository} from '/_services/repository';

@inject(Repository)
export class Speakers {
    constructor(repository) {
        this.repository = repository;
    }

    activate(params, routeConfig) {
        return this.repository.getAllSpeakers()
            .then(speakers => {
                this.speakers = speakers;
            });
    }
}