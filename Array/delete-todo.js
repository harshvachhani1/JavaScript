const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

// ===============
const deleteTodo = (todos, todoText) => {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "Buy food");
console.log(todos);

/*Part of forEach
todos.forEach((item, index) =>
  console.log(`${index},${item.text}, ${item.completed}`)
);
 */

/* Part of For/of array
for (item of todos) {
  console.log(item.text);
}
*/

/* Part of for/in array inside object 
for (item in todos) {
  console.log(item);
  // console.log(todos[item].text);
}

/*Part of for
for (let count = 0; count < todos.length; count++) {
  const num = count + 1;
  const todo = todos[count];
  console.log(`${num}. ${todo.text} ${todo.completed}`);
}
*/
