/* 
Abstract Factory
It creates families or groups of common objects without specifying their concrete classes.

According to Wikipedia:
The abstract factory pattern provides a way to encapsulate a group of individual factories 
that have a common theme without specifying their concrete classes
*/

class Drink {
    consume() {}
}

class Tea extends Drink {
    consume() {
        console.log('This is Tea');
    }
}

class Coffee extends Drink {
    consume() {
        console.log('This is Coffee')
    }
}


class TeaFactory {
    makeTea() {
        console.log('Tea Created');
        return new Tea();
    }
}

class CoffeeFactory {
    makeCoffee() {
        console.log('Coffee Created');return new Coffee();
    }
}

//And this is how we can use it
let teaDrinkFactory = new TeaFactory();
let tea = teaDrinkFactory.makeTea()
tea.consume()