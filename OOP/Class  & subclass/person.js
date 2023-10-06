class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }

  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName}is a ${this.position}`;
  }
}

const person1 = new Employee("Ram", "raj", 55, "Teacher", [
  "reading",
  "traveling",
  "teaching",
]);
// person1.fullName = "radhe radhe"
console.log(person1);
// console.log(person1.getBio());
// person1.setName("manoj kumar");
// console.log(person1);

const person2 = new Person("Raj", "kishan", 25);
console.log(person2.getBio());

// inheritance
// Can I come to meet you sir?
