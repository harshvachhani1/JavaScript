const person = {
  firstName: "john",
  lastName: "smith",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(name) {
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
  },
};

console.log(person.fullName);

person.fullName = "harsh vachhani";
console.log(person.fullName);

// prefixed write by _
