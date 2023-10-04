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

//callfunction for request.js file
getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    console.log(puzzle);
  }
});

//making an HTTP request

//XMLHttpRequest: readyState property
//HTTP response status codes 200(ok)
//this url show status code https://www.webfx.com/web-development/glossary/http-status-codes/

/*
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (reciveData) => {
  if (reciveData.target.readyState === 4 && reciveData.target.status === 200) {
    const data = JSON.parse(reciveData.target.responseText);
    console.log(data);
  } else if (reciveData.target.readyState === 4) {
    console.log("An error has taken place");
  }
});

request.open("GET", "https://puzzle.mead.io/puzzle");
request.send();
*/
