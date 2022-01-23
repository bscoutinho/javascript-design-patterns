/* 
Adapter
This pattern allows classes with incompatible interfaces to work together by wrapping their own interface around existing class

According to Wikipedia:
Adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. 
It is often used to make existing classes work with others without modifying their source code.
*/

/* 
Example
We are using an example of a calculator. Calculator1 is an old interface and Calculator2 is a new interface. 
We will be building an adapter that will wrap up the new interface and will give us results using its new methods,
*/

class Calculator1 {
    constructor() {
        this.operations = function(value1, value2, operation) {
            switch(operation) {
                case 'add':
                    return value1 + value2;
                case 'sub':
                    return value1 - value2;
            }
        }
    }
}

class Calculator2 {
    constructor() {
        this.add = function(value1, value2) {
            return value1 + value2;
        }
        this.sub = function(value1, value2) {
            return value1 - value2;
        }
    }
}

//Let's create adapter class
class CalcAdapter {
    constructor() {
        const cal2 = new Calculator2();
        this.operations = function(value1, value2, operation) {
            switch(operation) {
                case 'add':
                    return cal2.add(value1, value2)
                case 'sub':
                    return cal2.sub(value1, value2)
            }
        }
    }
}


// Results here
let calcAdd = new CalcAdapter
let resultAdd = calcAdd.operations(1, 2, 'add')
let resultSub = calcAdd.operations(2, 1, 'sub')
console.log(resultAdd)
console.log(resultSub)