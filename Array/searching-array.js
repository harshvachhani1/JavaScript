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

/*Ex : 1 */
// const findNote =  (notes, noteTitle) => {
//   const index = notes.findIndex((note, index) =>{
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, "office modification");
// console.log(note);

/* Ex : 2 */
const findNote = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, "office Modification");
console.log(note);

/*Ex : 3*/
// const index = notes.findIndex(() => {
// console.log(note);
// });

// console.log(index);
