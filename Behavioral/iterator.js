/* 
Iterator
Iterator accesses the elements of an object without exposing its underlying representation.

According to Wikipedia:
In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to 
traverse a container and access the container’s elements.
*/

/* 
Example
We will be taking an example of an array in which we print the values of an array and then by 
using an iterator we print its value backwords.
*/

class Stuff {
    constructor() {
        this.a = 11;
        this.b = 22;
    }

    [Symbol.iterator]() {
        let i = 0;
        let self = this;
        return {
            next: function() {
                return {
                    done: i > 1,
                    value: self[i++ === 0 ? 'a' : 'b']
                }
            }
        }
    }
    get backwards() {
        let i = 0;
        let self = this;
        return {
            next: function() {
                return {
                    done: i > 1,
                    value: self[i++ === 0 ? 'b' : 'a']
                }
            },
            // make iterator iterable
            [Symbol.iterator]: function() { return this; }
        }
    }
}

// Results
let values = [100, 200, 300]

for (let i in values) {
    console.log(`Element at pos ${i} is ${values[i]}`);
}
for (let v of values) {
    console.log(`Value is ${v}`);
}

let stuff = new Stuff();

for(let item of stuff) {
    console.log(`${item}`)
}

for (let item of stuff.backwards) {
    console.log(`${item}`)
}