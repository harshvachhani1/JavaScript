//Primitives Data types :- Null,Number,symbol,String,Boolean,Bigint,Undefined

//Non-Primitive data types :- Array, Class, String, and Interface

//Types Of Operators :-
//1)Arithmetic Operators = +, -, *, **, /, %, ++, --
//2)Assignment Operators = =, +=, -=, *=, /=, %=, **=
//3)Comparison Operators = >, <, ==, ===, !=, !==, >=, <=
//4)Logical Operators    = &&, ||, !

//add js file in other file <script src="File_Name"></script>

console.log("hello world"); //for print console node file_name

//1)Types of variable :-1)Let 2)Const
// Global Scope -> Define outside of all code blocks
// Local Scope -> Define Inside a Blocks
//Global Scope (varOne)
//Local Scope (varTwo)
let varOne = "varOne";
if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);
}
// console.log(varTwo); show error that is local variable

let FirstName = "Webelight";
// console.log(FirstName);

let LastName = "solutions"; //Camel Casing Variable Name
// console.log(FirstName);

let FullName = FirstName + "  " + LastName + " At Ahmedabad"; // + for use concatenation Operators
console.log(FullName);
`${FullName}`; //both are work console.log and that (backtics ${name} backtics)

//number data type ex
let StudentScore = 18;
let TeamScore = 20;
let percentage = (StudentScore / TeamScore) * 100;
console.log("ans is :- " + `${percentage}`);

//Type of Boolean True or False Return
// === is equal value and equal type
// !== is not equal value or not equal type

let Math = 88;
let English = 88;
let Marks = Math === 89; //ans is False
let Marks2 = Math !== 89; //ans is True
let Marks3 = Math === English; //ans is True
console.log("Ans :- " + `${Marks}` + " - " + `${Marks2}` + " - " + `${Marks3}`);

// If statement
// if (condition) {
//  block of code to be executed if the condition is true
// }

// If...else statement
// if (condition) {
//  block of code to be executed if the condition is true
// } else {
//  block of code to be executed if the condition is false
// }

// The else if Statement
// if (condition1) {
//  block of code to be executed if condition1 is true
// } else if (condition2) {
//  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//  block of code to be executed if the condition1 is false and condition2 is false
// }

// Variable Scope
