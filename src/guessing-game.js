class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        const lastGuess  = Math.ceil(this.min+(this.max - this.min)/2);
        this.currentGuess  = lastGuess;
        return lastGuess;
    }

    lower() {
        this.max = this.currentGuess;
    }

    greater() {
        this.min = this.currentGuess;
    }
}

module.exports = GuessingGame;