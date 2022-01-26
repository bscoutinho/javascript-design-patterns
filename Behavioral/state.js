/* 
State
It alters the behavior of an object when its internal state changes.

According to Wikipedia:
The state pattern is a behavioral software design pattern that allows an object to alter its behavior when its internal state changes. 
This pattern is close to the concept of finite-state machines.
*/

/* 
Example
We will be taking an example of a light switch in which if we turn on or off the switch, its state changes.
*/

class OnState extends State {
    constructor(state) {
        super();
        console.log('Light turned on');
    }
    off(sw) {
        console.log('Turning light off..');
        sw.state = new OffState();
    }
}

class OffState extends State {
    constructor() {
        super();
        console.log('Light turned off');
    }
    on(sw) {
        console.log('Turning light on...');
        sw.state = new OnState();
    }
}

// Let's create a Switch class to use these On/Off state

class Switch {
    constructor() {
        this.state = new OffState();
    }

    on() {
        this.state.on(this)
    }

    off() {
        this.state.on(this)
    }
}

class State {
    constructor() {
        if (this.constructor === state) throw new Error('Abstract!')
    }

    on(sw) {
        console.log('Lights is already on. ')
    }

    off(sw) {
        console.log('Light is already off. ')
    }
}

// Results
let sw = new Switch();
sw.on();
sw.off();

