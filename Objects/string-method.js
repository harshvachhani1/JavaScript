const name = "Hello How Are You   ";
const lastName = "Fine";

//length property
console.log(name.length);

//slice() The method takes 2 parameters: start position, and end position (end not included).
console.log(name.slice(0, 5));

//concat()
console.log(name.concat("", lastName));

// Convert to upper case
console.log(name.toUpperCase());

//Convert to lower case
console.log(name.toLowerCase());

// include method
let password = "webelight@123";
console.log(password.includes("webelight@123"));

//Trim Remove White Spaces
console.log(name.trim());

//Build password verification
const userPassword = (password) => {
  if (password.length >= 8 && password.includes("webelight@123")) {
    console.log(`welcome`);
  } else {
    console.log(`please enter valid password`);
  }
};

userPassword("webelight@123");
