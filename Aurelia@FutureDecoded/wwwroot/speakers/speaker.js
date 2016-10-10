export class Speaker {
    activate(bindingContext) {
        this.speaker = bindingContext;
    }

    get image() { 
        return `${this.speaker.firstName.toLowerCase().replace(' ', '')}${this.speaker.lastName.toLowerCase().replace(' ', '')}`; 
    }

    get fullName() { 
        return `${this.speaker.firstName} ${this.speaker.lastName}`; 
    }
}