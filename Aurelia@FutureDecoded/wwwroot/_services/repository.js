import {sessionsData} from '/_services/sessionsData';
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

    getAllSessions() {
        var promise = new Promise((resolve, reject) => {
            if (!this.sessions) {
                sessionsData.sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1 );
                sessionsData.forEach(s => {
                    var dt = moment(s.dateTime)
                        .format('DD/MM/YYYY HH:mm');
                    s.startsAt = dt;
                });
                this.sessions = sessionsData;
            }
            resolve(this.sessions);
        });
        return promise;
    }

    getSession(id) {
        var promise = new Promise((resolve, reject) => {
            this.getAllSessions()
                .then(sessions => {
                    resolve(sessions.find(s => s.id === id));
                });
        });
        return promise;
    }

    getSessions(upcomingOrPast) {
        if (upcomingOrPast == 'past')
            return this.getPastSessions();
        else
            return this.getUpcomingSessions();
    }

    getUpcomingSessions() {
        var promise = new Promise((resolve, reject) => {
            this.getAllSessions()
                .then(sessions => {
                    resolve(sessions.filter(s => moment(s.dateTime) > moment()));
                });
        });
        return promise;
    }

    getPastSessions() {
        var promise = new Promise((resolve, reject) => {
            this.getAllSessions()
                .then(sessions => {
                    resolve(sessions.filter(s => moment(s.dateTime) < moment()));
                });
        });
        return promise;
    }
}