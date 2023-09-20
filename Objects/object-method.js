// EX : 1

// const restaurant = {
//   name: "TGM restaurant",
//   personCapacity: 80,
//   presentPerson: 0,
//   checkGuestCapacity: (availableGuest) => {
//     console.log(availableGuest);
//   },
// };

// restaurant.checkGuestCapacity(20);

// EX : 2 use with this and make method

// const restaurant = {
//   name: "TGM restaurant",
//   personCapacity: 80,
//   presentPerson: 10,
//   checkGuestCapacity: function () {
//     return this.personCapacity - this.presentPerson;
//     // restaurant.personCapacity =
//     //   restaurant.personCapacity - restaurant.presentPerson;
//     // console.log(`${restaurant.personCapacity} `);
//   },
// };
// // restaurant.checkGuestCapacity();
// restaurant.presentPerson = 30;
// // console.log(restaurant);
// console.log(restaurant.checkGuestCapacity());

// EX : 3 set defaul value
// const restaurant = {
//   name: "TGM restaurant",
//   personCapacity: 80,
//   presentPerson: 10,
//   checkGuestCapacity: function (waitingGuest = this.presentPerson) {
//     return this.personCapacity - waitingGuest;
//     // restaurant.personCapacity =
//     //   restaurant.personCapacity - restaurant.presentPerson;
//     // console.log(`${restaurant.personCapacity} `);
//   },
// };

// restaurant.checkGuestCapacity();
// console.log(restaurant.checkGuestCapacity());

// EX : 4
// const restaurant = {
//   name: "TGM restaurant",
//   personCapacity: 80,
//   presentPerson: 0,
//   checkGuestCapacity: function (availableGuest) {
//     console.log(this.personCapacity);
//   },
// };

// restaurant.checkGuestCapacity();

// EX : 5 true or false

const restaurant = {
  name: "TGM restaurant",
  personCapacity: 80,
  presentPerson: 10,
  checkGuestCapacity: function (availableGuest) {
    const seatLeft = this.personCapacity - this.presentPerson;
    return availableGuest <= this.personCapacity;
  },
};

console.log(restaurant.checkGuestCapacity(90));
