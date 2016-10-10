export class Sessions {
    configureRouter(config, router) {
        this.router = router; 
        config.title = 'Sessions';
        config.map([
            { 
                route: ['', 'upcoming'], 
                name: 'upcoming', 
                moduleId: 'sessions/sessions-date', 
                nav: true, 
                title: 'Upcoming', 
                activationStrategy: 'invoke-lifecycle' 
            },
            { 
                route: 'past', 
                name: 'past', 
                moduleId: 'sessions/sessions-date', 
                nav: true, 
                title: 'Past', 
                href: '#/sessions/past', 
                activationStrategy: 'invoke-lifecycle' 
            }
        ]);
    }
}