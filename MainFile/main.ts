class RandomNumberGame {
  private randomNumber: number;
  private maxNumber: number;
  private minNumber: number;
  private guessCount: number;
  private gameOver: boolean;

  constructor(maxNumber: number) {
    this.maxNumber = maxNumber;
    this.minNumber = 1;
    this.guessCount = 0;
    this.gameOver = false;
    this.randomNumber = this.generateRandomNumber();
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
  }

  private validateGuess(guess: number): boolean {
    return guess >= this.minNumber && guess <= this.maxNumber;
  }

  public makeGuess(guess: number): string {
    if (this.gameOver) {
      return "The game is already over. Please start a new game.";
    }

    if (!this.validateGuess(guess)) {
      return `Invalid guess. Please enter a number between ${this.minNumber} and ${this.maxNumber}.`;
    }

    this.guessCount++;

    if (guess === this.randomNumber) {
      this.gameOver = true;
      return `Congratulations! You guessed the number ${this.randomNumber} in ${this.guessCount} guesses.`;
    } else if (guess < this.randomNumber) {
      return "Your guess is too low. Try again.";
    } else {
      return "Your guess is too high. Try again.";
    }
  }

  public startNewGame(): void {
    this.guessCount = 0;
    this.gameOver = false;
    this.randomNumber = this.generateRandomNumber();
  }
}

const game = new RandomNumberGame(100);

console.log("Welcome to the random number guessing game!");
console.log(`Guess a number between ${game.minNumber} and ${game.maxNumber}.`);

while (!game.gameOver) {
  const guess = parseInt(prompt("Enter your guess:"));
  console.log(game.makeGuess(guess));
}

const playAgain = prompt("Do you want to play again? (Y/N)").toUpperCase();

if (playAgain === "Y") {
  game.startNewGame();
  console.log(`Guess a number between ${game.minNumber} and ${game.maxNumber}.`);
} else {
  console.log("Thanks for playing!");
}
