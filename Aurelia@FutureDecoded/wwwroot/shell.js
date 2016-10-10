export class Shell {
    constructor() {
        this.footer = 'Sviluppare SPA con Aurelia';
    }
    configureRouter(config, router) { 
        this.router = router; 
        config.title = 'Aurelia @ Future Decoded'; 
        config.map([
            { 
                route: ['', 'sessions'], 
                name: 'sessions', 
                moduleId: 'sessions/sessions', 
                nav: true, 
                title: 'Sessions' 
            },
            { route: 'session/:id',  name: 'session', moduleId: 'sessions/session', title: 'Session' },
            { route: 'speakers',  name: 'speakers', moduleId: 'speakers/speakers', nav: true, title: 'Speakers' }
        ]);
    }
}