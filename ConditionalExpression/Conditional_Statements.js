// if Statement
let marks = 84;
if (marks > 60) {
  console.log("You are Pass");
}

// else Statement
let date = 19;
if (date == 18) {
  console.log("Today Date Is : " + `${date}`);
} else {
  console.log("Wrong Date : " + `${date}`);
}

//else if Statement
let rate = 2000;
if (rate > 1000) {
  a = (rate * 10) / 100;
  console.log("Discount 10% :" + `${a}`);
} else if (rate > 800) {
  a = (rate * 5) / 100;
  console.log("Discount 5% : " + `${a}`);
} else {
  console.log("No Discount");
}

let temp = 45;
if (temp <= 32) {
  console.log("It is freezing outside");
} else if (temp >= 60) {
  console.log("It is hot outside");
} else {
  console.log("Go for it");
}
