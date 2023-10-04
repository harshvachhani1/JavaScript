//define function getPuzzle

const getPuzzle = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (reciveData) => {
    if (
      reciveData.target.readyState === 4 &&
      reciveData.target.status === 200
    ) {
      const data = JSON.parse(reciveData.target.responseText);
      callback(undefined, data.puzzle);
    } else if (reciveData.target.readyState === 4) {
      callback("An error has taken place", undefined);
    }
  });
  request.open("GET", "https://puzzle.mead.io/puzzle");
  request.send();
  // return "my new puzzle";
};
