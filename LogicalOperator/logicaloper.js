//logical and
let temp = 13;

if (temp <= 60 && temp >= 50) {
  console.log("It is freezing outside");
} else if (temp >= 80 && temp <= 140) {
  console.log("It is hot outside");
} else {
  console.log("Go for it");
}

// 	logical or
let temp2 = 130;

if (temp2 <= 30 || temp2 == 50) {
  console.log("It is freezing outside");
} else if (temp2 >= 80 || temp2 <= 140) {
  console.log("It is hot outside");
} else {
  console.log("Go for it");
}

// 	logical or & and
let temp3 = 20;

if (temp3 >= 20 && temp3 <= 30) {
  console.log("It is freezing outside");
} else if (temp3 >= 50 || temp3 >= 140) {
  console.log("It is hot outside");
} else {
  console.log("Go for it");
}
