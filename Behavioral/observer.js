/* 
Observer
It allows a number of observer objects to see an event.

According to Wikipedia:
The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, 
called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
*/

/* 
Example
We will be taking an example of a person in which if a person falls ill, it will display a notification.
*/

class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }
    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }
    unsubscribe(idx) {
        this.handlers.delete(idx);
    }
    fire(sender, args) {
        this.handlers.forEach((v, k) => v(sender, args));
    }
}

class FallsIllArgs {
    constructor(address) { 
        this.address = address;
    }
}

class Person {
    constructor(address) {
        this.address = address;
        this.fallsIll = new Event();
    }
    catchCold() {
        this.fallsIll.fire(this, new FallsIllArgs(this.address));
    }
}

// Results
let person = new Person('ABC road');
let sub = person.fallsIll.subscribe((s, a) => {
    console.log(`A doctor has been called to ${a.address}`);
})

person.catchCold();
person.catchCold();

person.fallsIll.unsubscribe(sub);
person.catchCold();