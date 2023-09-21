const books = ["The Great Gatsby", "Wuthering Heights", "Frankenstein"];

// console.log(books.length);
// console.log(books);
// console.log(books[0]);
// console.log(books[books.length-1]);

const todos = [
  "order cat food",
  "clean kitchen",
  "buy food",
  "do work",
  "exercise",
];

// Callback Function
// A callback is a function passed as an argument to another function.

todos.forEach((todo, index) => {
  const indexPlus = index + 1; //for starting index 1 default start is 0
  console.log(`${indexPlus}. ${todo}`);
});

// console.log(`you have somthing ${todos.length} todos`);
// console.log(`Todo : ${todos[0]}`);
// console.log(`Todo : ${todos[todos.length - 2]}`);

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1;
//   const todo = todos[count];
//   console.log(`${num}. ${todo}`);
// }
