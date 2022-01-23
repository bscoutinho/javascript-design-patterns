/* 
Decorator
It dynamically adds or overrides the behavior of an object.

According to Wikipedia:
The decorator pattern is a design pattern that allows behavior to be added to an individual object, 
dynamically, without affecting the behavior of other objects from the same class.
*/

/* 
Example
We will be taking the example of color and shapes. If we have to draw a circle we will create methods and will draw a circle. 
If we have to draw a red circle. Now the behavior is added to an object and the Decorator pattern will help me in that.
*/

class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(radius = 0) {
        super();
        this.radius = radius;
    }

    resize(factor) {
        this.radius *= factor;
    }

    toString() {
        return `A circle ${this.radius}`
    }
}

class ColoredShape extends Shape {
    constructor(shape, color) {
        super();
        this.shape = shape;
        this.color = color;
    }

    toString() {
        return `${this.shape.toString()} has the color ${this.color}`
    }
}

// Results
let circle = new Circle(2);
console.log(circle);

let redCircle = new ColoredShape(circle, 'red');
console.log(redCircle.toString())