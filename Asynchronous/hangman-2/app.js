const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 3);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.StatusMessage;
// console.log(game1.status);

window.addEventListener("keypress", (e) => {
  // console.log(e.charCode);
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.StatusMessage;
  // console.log(e);
  // console.log(game1.status);
});

getCountry("US", (error, country) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`country name : ${country.name}`);
  }
});
