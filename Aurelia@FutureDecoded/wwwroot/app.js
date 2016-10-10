export class App {
    message = 'Benvenuti a Future Decoded!';

    constructor() {
        this.name = '';
        this.agenda = ['Binding', 'Composition', 'Dependency Injection', 'Routing & Navigation' ];
    }

    get tooltip() {
        return 'sono Aurelia';
    }

    sayHello() {
        alert(`Ciao ${this.name}!`);
    }
}