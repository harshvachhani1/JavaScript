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

const getThingsToDo = (todos) => {
  return todos.filter((todo) => {
    return !todo.completed;
  });
};

console.log(getThingsToDo(todos));

// todos.forEach((item, index) =>
//   console.log(`${index},${item.text}, ${item.completed}`)
// );
