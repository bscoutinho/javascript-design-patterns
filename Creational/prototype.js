/* 
Prototype
It creates new objects from the existing objects.

According to Wikipedia:
The prototype pattern is a creational design pattern in software development. 
It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
*/

class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    setName(name) {
        console.log(`${name}`);
    }

    clone() {
        return new Car(this.name, this.model)
    }
}

//And this is how we will use it
let car = new Car();
car.setName('Audi');

let car2 = new Car();
car.setName('BMW');