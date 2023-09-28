const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split(""); //single character check('')
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [""];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      //word check(" ")

      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);
  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--; //-1
  }
};
// console.log(Hangman);
const game1 = new Hangman("Cat clone", 3);
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener("keypress", (e) => {
  // console.log(e.charCode);
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  console.log(game1.getPuzzle());
  console.log(game1.remainingGuesses);
  // console.log(e);
});

// game1.makeGuess("c");
// game1.makeGuess("t");
// // console.log(game1);
