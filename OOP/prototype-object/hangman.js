const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split(""); //single character check('')
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = ["c"];
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
// console.log(Hangman);
const game1 = new Hangman("Cat clone", 2);
// console.log(game1);
console.log(game1.getPuzzle());

const game2 = new Hangman("Mumbai", 4); //hello word --> h,e,l,l,o, w,o,r,d,' '
console.log(game2.getPuzzle());
