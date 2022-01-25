/* 
Memento
Memento restores an object to its previous state.

According to Wikipedia:
The memento pattern is a software design pattern that provides the ability to restore an object to its previous state. 
The memento pattern is implemented with three objects: the originator, a caretaker and a memento.
*/

/* 
Example
We will be taking an example of a bank account in which we store our previous state and will have the functionality of undoing.
*/

class Memento {
    constructor(balance) {
        this.balance = balance;
    }
}

// Adding bank account
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return new Memento(this.balance);
    }
    restore(m) {
        this.balance = m.balance;
    }
    toString() {
        return `Balance: ${this.balance}`
    }
}

// Let's use this class for example
let bankAccount = new BankAccount(100);
let m1 = bankAccount.deposit(50);
console.log(bankAccount.toString())



// restore to m1
bankAccount.restore(m1);
console.log(bankAccount.toString())