// Different Kinds of Loops
/*
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

const books = [
  "The Lord Of The Rings",
  "A Little Life",
  "The Fault In Our Stars",
  "Wings Of Fire An Autobiography",
];

// books.forEach((item, index) => {
//   console.log(`Index:${index} books is ${item}`);
// });

/* for(initializer,condition,expression) */

// for (let count = 0; count < books.length; count++) {
//   console.log(books[count]);
// }

for (let count = 0; count < books.length; count++) {
  const indexNumber = count + 1;
  const bookName = books[count];
  console.log(`${indexNumber}. ${bookName}`);
}

/*same example as write above */
// books.forEach((todo, index) => {
//   const indexPlus = index + 1; //for starting index 1 default start is 0
//   console.log(`${indexPlus}. ${todo}`);
// });

// console.log(books.toString());

// console.log(books.join(" -- "));
