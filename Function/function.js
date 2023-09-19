let userName = function () {
  console.log("Welcome Admin");
};
userName();

// use return value
// Ex : 1
let square = (num) => {
  // let result = num * num;
  return num * num;
  // return result;
};
let value = square(4);
console.log(value);

// Ex : 2 only in one line
let square1 = (num) => num * num;
console.log(square1(5));

/* NOTE :-
1)var sum = c => c; Work
2)var sum = c => {c}; Not Work
3)var sum = c => {return c} Work
*/

// Ex : 3

var mark = (math, eng, sci) => math + eng + sci;

var percentage = (totalMark) => (totalMark / 300) * 100;

var total = mark(10, 20, 30);
console.log(total);

var percentages = percentage(total);
console.log(percentages);
