/* 
Command
It creates objects which encapsulate actions in objects.

According to Wikipedia:
In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate 
all information needed to perform an action or trigger an event at a later time. 
This information includes the method name, the object that owns the method and values for the method parameters.
*/

/* 
Example
We will be taking a simple example of a bank account in which we give a command 
if we have to deposit or withdraw a certain amount of money.
*/

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} Total balance ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance - amount >= BankAccount.overdraftLimit) {
            this.balance -= amount;
            console.log('Withdrawn');
        }
    }
    toString() {
        return `Balance ${this.balance}`;
    }
}
BankAccount.overdraftLimit = -500

//Creating our commands

let action = Object.freeze({
    deposit: 1,
    withdraw: 2
});

class BankAccountCommand {
    constructor(account, action, amount) {
        this.account = account;
        this.action = action;
        this.amount = amount;
    }

    call() {
        switch (this.action) {
            case action.deposit:
                this.account.deposit(this.amount);
                break;
            case action.withdraw:
                this.account.withdraw(this.amount);
                break;
        }
    }
    undo() {
        switch (this.action) {
            case action.deposit:
                this.account.withdraw(this.amount);
                break;
            case action.withdraw:
                this.account.deposit(this.amount);
                break;
        }
    }
}

//results

let bankAccount = new BankAccount(100);
let cmd = new BankAccountCommand(bankAccount, action.deposit, 50);

cmd.call();
console.log(bankAccount.toString());

cmd.undo();
console.log(bankAccount.toString());