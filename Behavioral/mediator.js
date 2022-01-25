/* 
Mediator
The mediator pattern adds a third-party object to control the interaction between two objects. 
It allows loose coupling between classes by being the only class that has detailed knowledge of their methods.

According to Wikipedia:
The mediator pattern defines an object that encapsulates how a set of objects interact. 
This pattern is considered to be a behavioral pattern due to the way it can alter the program’s running behavior. 
In object-oriented programming, programs often consist of many classes.
*/

/* 
Example
We will be using an example of a person using a chat room. Here, a chatroom acts as a mediator between two people communicating.
*/

class Person {
    constructor(name) {
        this.name = name;
        this.chatLog = [];
    }
    receive(sender, message) {
        let s = `${sender}: '${message}'`
        console.log(`[${this.name}'s chat session] ${s}`);
        this.chatLog.push(s);
    }
    say(message) {
        this.room.broadcast(this.name, message);
    }
    pm(who, message) {
        this.room.message(this.name, who, message);
    }
}

// Creating a chat room
class ChatRoom {
    constructor() {
        this.people = [];
    }
    broadcast(source, message) {
        for (let p of this.people) {
            if (p.name !== source) p.receive(source, message);
        }
    }
    join(p) {
        let joinMsg = `${p.name} joins the chat`;
        this.broadcast('room', joinMsg)
        p.room = this;
        this.people.push(p);
    }
    message(source, destination, message) {
        for (let p of this.people) {
            if (p.name === destination) {
                p.receive(source, message)
            }
        }
    }
}

// Results
let room = new ChatRoom();
let John = new Person('John');
let Tony = new Person('Tony');

room.join(John);
room.join(Tony);
John.say('Hello!!');

let Bruno = new Person('Bruno');
room.join(Bruno);
Bruno.say('Hello everyone!');