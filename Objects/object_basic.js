const book = {
  title: "Bhagavad Gita",
  author: "Vyasa",
  pages: 700,
};
// console.log(book);
console.log(`${book.title} by ${book.author}`);

// Ex : 2
const student = {
  Name: "Raj",
  Class: "b",
  Age: 22,
  City: "mumbai",
};

console.log(`${student.Name} is ${student.Age} and lives in ${student.City}`);

student.Age = student.Age + 1;
console.log(`${student.Name} is ${student.Age} and lives in ${student.City}`);
