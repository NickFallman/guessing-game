class GuessingGame {
    constructor() {
      this.guessNum = 0;
    }

    setRange(min, max) {
      this.lowerBound = min;
      this.upperBound = max;
    }

    guess() {
      // this.guessNum = Math.round((this.lowerBound + this.upperBound) / 2);
      // return (this.guessNum);
    }

    lower() {
      // this.upperBound = this.guessNum;
    }

    greater() {
      // this.lowerBound = this.guessNum;
    }
}

module.exports = GuessingGame;
