/* 
Flyweight
It reduces the memory cost of creating similar objects.

According to Wikipedia:
A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects.
*/

/* 
Example
Let’s take the example of a user. Let’s have multiple users with the same name. 
We can save our memory by storing a name and give it a reference to the users having the same names.
*/

class User {
    constructor(fullName) {
        this.fullName = fullName;
    }
}

class User2 {
    constructor(fullName) {
        let getOrAdd = (s) => {
            let idx = User2.strings.indexOf(s);
            if (idx !== -1) return idx;
            else {
                User2.strings.push(s);
                return User2.strings.length -1
            }
        }
        this.names = fullName.split(' ').map(getOrAdd);
    }
}

User2.strings = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let randomString = () => {
    let result = [];
    for (let x = 0; x < 10; ++x) {
        result.push(String.fromCharCode(65 + getRandomInt(26)))
    }
    return result.join('');
}


/* 
That’s how we will use this.
Now we will make memory comparsion without Flyweight and with Flyweight, by making 10k users.
*/

let users = [] 
let users2 =  []
let firstNames = []
let lastNames = []

for (let i = 0; i < 100; ++i) {
    firstNames.push(randomString());
    lastNames.push(randomString());
}

// Making 10K users
for (let first of firstNames) {
    for (let last of lastNames) {
        users.push(new User(`${first} ${last}`));
        users2.push(new User2(`${first} ${last}`))
    }
}

console.log(`10k users take up approx ${JSON.stringify(users).length} chars`)

let users2length = [users2, User2.strings].map(x => JSON.stringify(x).length).reduce((x,y) => x+y)

console.log(`10k flyweight users take ${users2length} chars`)