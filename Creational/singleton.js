/* 
Singleton
It ensures that there’s only one object created for a particular class.

According to Wikipedia:
Singleton pattern is a software design pattern that restricts the instantiation of a class to one “single” instance. 
This is useful when exactly one object is needed to coordinate actions across the system.
*/

class Singleton {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            this.constructor.instance = this;
        }
    }
    say() {
        console.log('Saying...')
    }
}

//Let's use the singleton we created
let s1 = new Singleton();
let s2 = new Singleton();
console.log('Are they same? ' + (s1 === s2));

s1.say();

