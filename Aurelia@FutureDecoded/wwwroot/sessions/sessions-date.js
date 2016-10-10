import {inject} from 'aurelia-framework';
import {Repository} from '/_services/repository';
import {Router} from 'aurelia-router';

@inject(Repository, Router)
export class SessionsDate {
    constructor(repository, router) {
        console.log('SessionsDate.ctor');
        this.repository = repository;
        this.router = router;
    }

    activate(params, routeConfig) {
        console.log('SessionsDate.activate ' + routeConfig.name);
        return this.repository.getSessions(routeConfig.name)
            .then(sessions => {
                sessions.forEach(s => {
                    s.url = this.router.generate('session', { id: s.id });
                });
                if (params.track) {
                    var filteredSessions = [];
                    sessions.forEach(s => {
                        if (s.track.toLowerCase().indexOf(params.track.toLowerCase()) > -1)
                            filteredSessions.push(s);
                    });
                    this.sessions = filteredSessions;
                }
                else
                    this.sessions = sessions;
            });
    }

    deactivate() {
        console.log('SessionsDate.deactivate');
    }
}