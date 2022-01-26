/* 
Template Method
It defines the skeleton of an algorithm as an abstract class, that how should it be performed.

According to Wikipedia:
Template Method is a method in a superclass, usually an abstract superclass, 
and defines the skeleton of an operation in terms of a number of high-level steps.
*/

/* 
Example
We will be taking an example of a chess game,
*/

class Game {
    constructor(numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
        this.currentPlayer = 0
    }
    run() {
        this.start();
        while (!this.haveWinner) {
            this.takeTurn();
        }
        console.log(`Player ${this.winningPlayer} wins`)
    }
    start() {}
    get haveWinner() {}
    takeTurn() {}
    get winningPlayer() {}
}

//Creating our chess class

class Chess extends Game {
    constructor() {
        super(2)
        this.maxTurns = 10;
        this.turn = 1;
    }
    

    start() {
        console.log(`Starting a game of chess with ${this.numberOfPlayers} players`)
    }

    getHaveWinner() {
        return this.turn === this.maxTurns;
    }

    takeTurn() {
        console.log(`
            Turn ${this.turn++} taken by player ${this.currentPlayer}
        `)
        this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers
    }

    get winningPlayer() {
        return this.currentPlayer
    }
}

// Results
let chess = new Chess();
chess.run()