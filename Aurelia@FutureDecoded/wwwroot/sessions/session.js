import {inject} from 'aurelia-framework';
import {Repository} from '/_services/repository';

@inject(Repository)
export class Session {
    constructor(repository) {
        this.repository = repository;
    }

    activate(params, routeConfig) {
        this.repository.getSession(parseInt(params.id))
            .then(session => {
                this.session = session;
            })
    }
}