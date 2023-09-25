const price = 555.562;

//after . value fixed
console.log(price.toFixed(1));

// Round number after .5
const price2 = 599.8;
console.log(Math.round(price2));
console.log(Math.floor(price2));
console.log(Math.ceil(price2));

// Random ex 1
// const min = 0;
const max = 2;
const randomNumber = Math.floor(Math.random() * max);
// console.log(Math.floor(Math.random() * (maxValue - minValue + 1) + maxValue));
console.log(randomNumber);

// Random ex 2
const maxNumber = 5;
const minNumber = 0;
const randomNumberGet = Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + minNumber
);
console.log(randomNumberGet);
