/*Array Methods

Array length

Array pop()
Array push()
Array shift()
Array unshift()
Array splice()
Array slice()
Array join()
Array delete()
Array concat()
Array flat()
Array toString()
*/

const notes = ["Quarter note", "Breve", "Half note"];
const studentName = ["Raj", "Kishan"];
//The push() method adds a new element to an array (at the end):
// notes.push("My New Notes");

//The pop() method removes the last element from an array:
// console.log(notes.pop());

//The shift() method removes the first array element
// console.log(notes.shift());

//The unshift() method adds a new element to an array (at the beginning)
// console.log(notes.unshift("My First Note"));

//The splice() method can be used to add new items to an array:
// The first parameter (0) defines the position where new elements should be added.
// The second parameter (1) defines how many elements should be removed.
// notes.splice(1, 0, "My New Note");
// notes.splice(0, 1);

//The slice() method slices out a piece of an array into a new array.
/*
Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.

The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.
*/
// console.log(notes.slice(1));

/*
The concat() method creates a new array by merging (concatenating) existing arrays:
*/
// console.log(notes.concat(student));

console.log(notes);
console.log(notes.length);
