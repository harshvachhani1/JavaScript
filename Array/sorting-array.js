const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Bali",
  },
  {
    title: "Habbits to work on",
    body: "Exercise, eating a bit better.",
  },
  {
    title: "office modification",
    body: "Get a new seat",
  },
];

const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
  });
};

sortNotes(notes);
console.log(notes);

/*Part of forEach */
// notes.forEach((item, index) =>
//   console.log(`${index},${item.title}, ${item.completed}`)
// );

/*Basic Example
const sortArray = (array) => {
  array.sort((a, b) => {
    if (a > b) {
      return -1;
    }
  });
};

firstClassMark = [1, 11, 4, 8, 2];
secondClassMark = [85, 33, 41, 65, 98];

sortArray(firstClassMark);

console.log(firstClassMark);

sortArray(secondClassMark);
console.log(secondClassMark);
*/
