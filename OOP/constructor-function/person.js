// The constructor is a function that is used to create an object, while the prototype is an object that contains properties and methods that are inherited by objects created from a constructor

// Properties -> Methods(function) -> Object
/*EX 1 :
const Person = function ()  {};
const me = Person();
console.log(me);
//Ans : undefined
*/

/*EX 2 :
const Person = function ()  {};
const me = new Person(); //this is object defined with new
console.log(me);
//Ans : Person {}
*/

/*EX 3: 
const Person = function ()  {
  this.firstName = "Ram";
};
const me = new Person();
console.log(me);
//Ans : Person {firstName: 'Ram'}
*/

/*EX 4: 
const Person = function (firstName)  {
  this.firstName = firstName;
};
const me = new Person("Ram");
console.log(me);
//Ans : Person {firstName: 'Ram'}
*/

/*EX 5:
const Person = function (firstName)  {
  this.firstName = firstName;
  return {};
};
const me = new Person("Ram");
console.log(me);
//Ans : Person {} because override 
 */

/*EX 6: 
const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
const me = new Person("Ram", "raj", 55);
console.log(me);
//console.log(me.age); specific value
//Ans : Person { firstName: 'Ram', lastName: 'raj', age: 55 }
*/

/*EX 7: */
const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
const person1 = new Person("Ram", "raj", 55);
console.log(person1);

const person2 = new Person("Raj", "kishan", 25);
console.log(person2);

//console.log(me.age); specific value
//Ans : Person { firstName: 'Ram', lastName: 'raj', age: 55 } Person { firstName: 'Raj', lastName: 'kishan', age: 25 }
