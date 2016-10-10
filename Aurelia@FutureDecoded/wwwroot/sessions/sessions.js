import {inject} from 'aurelia-framework';
import {Repository} from '/_services/repository';
import {Router} from 'aurelia-router';

@inject(Repository, Router)
export class Sessions {
    constructor(repository, router) {
        this.repository = repository;
        this.router = router;
    }

    activate(params, routeConfig) {
        return this.repository.getAllSessions()
            .then(sessions => {
                sessions.forEach(s => {
                    s.url = this.router.generate('session', { id: s.id });
                });
                this.sessions = sessions;
            });
    }
}