let math = 90;
let sci = 80;
let guj = 50;

let subject = (sub1, sub2, sub3) => sub1 + sub2 + sub3;
var TotalMark = subject(math, sci, guj);
console.log(`Three Subject Mark is : ${TotalMark}`);

let percentage = (SubjectMark) => (SubjectMark / 300) * 100;
var percentages = percentage(TotalMark);
console.log(`Your Percentages is : ${percentages}`);

//while below comment code enable then this code apply in comment
let Grade = (Mathematics, science, gujarati, percentages) => {
  if (Mathematics <= 35 || science <= 35 || gujarati <= 35) {
    Status = "You are fail ";
  } else if (percentages >= 80) {
    Status = "Your class a ";
  } else if (percentages >= 70) {
    Status = "Your class b";
  } else {
    Status = "Your class c";
  }
  return `your status is ${Status}`;
};
var grades = Grade(math, sci, guj, percentages);
console.log(grades);

// let Grade = (Mathematics, science, gujarati, percentages) => {
//   if (Mathematics <= 35 || science <= 35 || gujarati <= 35) {
//     console.log(`You are fail `);
//   } else if (percentages >= 80) {
//     console.log(`Your class a `);
//   } else if (percentages >= 70) {
//     console.log(`Your class b `);
//   } else {
//     console.log(`Your class c`);
//   }
// };
// var grades = Grade(math, sci, guj, percentages);
