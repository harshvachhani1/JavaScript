const math = 90;
const sci = 80;
const guj = 50;

const subject = (sub1, sub2, sub3) => sub1 + sub2 + sub3;
const TotalMark = subject(math, sci, guj);
console.log(`Three Subject Mark is : ${TotalMark}`);

const percentage = (SubjectMark) => (SubjectMark / 300) * 100;
const percentages = percentage(TotalMark);
console.log(`Your Percentages is : ${percentages}`);

//while below comment code enable then this code apply in comment
const Grade = (Mathematics, science, gujarati, percentages) => {
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
console.log(Grade(math, sci, guj, percentages));

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
