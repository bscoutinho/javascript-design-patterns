/* 
Visitor
It adds operations to objects without having to modify them.

According to Wikipedia:
The visitor design pattern is a way of separating an algorithm from an object structure on which it operates. 
A practical result of this separation is the ability to add new operations to existing object structures without modifying the structures.
*/

/* 
Example
We will be taking an example of NumberExpression in which it gives us the result of the given expression.
*/

class NumberExpression {
    constructor(value) {
        this.value = value;
    }
    print(buffer) {
        buffer.push(this.value.toString());
    }
}

//Creating AdditionExpression
class AdditionExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    print(buffer) {
        buffer.push('(');
        this.left.print(buffer);
        buffer.push('+');
        this.right.print(buffer);
        buffer.push(')');
    }
}

// That's how we will use this,
// given expression => 5 + (1+9)

let e = new AdditionExpression(
    new NumberExpression(5),
    new AdditionExpression(
        new NumberExpression(1),
        new NumberExpression(9)
    )
);

let buffer = [];
e.print(buffer);
console.log(buffer.join(''));
