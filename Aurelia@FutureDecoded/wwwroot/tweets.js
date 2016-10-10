import moment from 'moment';

export class Tweets {
    constructor() {
        this.tweets = [
                { id: 1, title: 'Uno' },
                { id: 2, title: 'Due' }
        ];
        this.now = '';
        setInterval( _ => {
            this.now = moment();
        }, 200);
    }
}
