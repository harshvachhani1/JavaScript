//DOM - Document Object Model

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Bali",
//   },
//   {
//     title: "Habbits to work on",
//     body: "Exercise, eating a bit better.",
//   },
//   {
//     title: "office modification",
//     body: "Get a new seat",
//   },
// ];

const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

const incompleteTodos = todos.filter((todo) => !todo.completed);

const summary = document.createElement("h2");
summary.textContent = `you have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

incompleteTodos.forEach((todo) => {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});

/*EX :1  
const pTag = document.querySelectorAll("p");
pTag.forEach((pData) => {
  pData.remove();
});
*/

/*EX : 2
const p = document.querySelector("h1");
p.remove();
 */

/*EX : 3
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
  if (paragraph.textContent.includes("the")) {
    paragraph.remove();
  }
});
 */

/*EX : 4
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.textContent = "Hello New People";
});
*/

/*EX : 5 Add a new element 
const newParagraph = document.createElement("p");
newParagraph.textContent = "Ths is new element";
document.querySelector("body").appendChild(newParagraph);
*/
