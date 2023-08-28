class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor((this.min + this.max) / 2);
    }

    lower() {
        const currentGuess = this.guess();
        this.max = currentGuess; // Устанавливаем новое max на текущее значение guess - 1
    }

    greater() {
        const currentGuess = this.guess();
        this.min = currentGuess + 1; // Устанавливаем новое min на значение guess + 1
    }
}

module.exports = GuessingGame;
