//Primitive value : string, number, boolean, null, undefined
//product -> Object.prototype -> null
//Array : myArray -> Array.prototype ->object.prototype -> null
//Function : myFunc -> Function.prototype -> object.prototype -> mull
//String : myString -> String.prototype -> Object.prototype -> null
//Number : myNumber -> Number.prototype -> object.prototype -> null
//Boolean : myBoolean -> Boolean.prototype -> Object.prototype -> null

/*Ex 1:
const team = ["luke", "maddison"];
console.log(team); //give 3 property
console.log(team.hasOwnProperty("length"));
console.log(team.hasOwnProperty("include"));
*/

//object is non-primitive datatype

// const product = {
//   name: "Influence",
// };

/*
const product = new Object({
  name: "The war of art",
});

// product.name = "chair";

Object.prototype.hasOwnProperty = () => "Hello";

//hasOwnProperty
console.log(product.hasOwnProperty("name"));
console.log(product);
*/

/*
const product = "computer";
console.log(product);

const secondProduct = new String("cpu");
console.log(secondProduct);
*/

const Hangman = function (word, remainingGuesses) {
  this.word = word;
  this.word = remainingGuesses;
};

const game1 = new Hangman("Cat", 2);
console.log(game1);

const game2 = new Hangman("Mumbai", 4);
console.log(game2);
