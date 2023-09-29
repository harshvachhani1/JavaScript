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
const filters = {
  searchText: "",
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `you have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach((todo) => {
    const newDataStore = document.createElement("p");
    newDataStore.textContent = todo.text;
    document.querySelector("#todos").appendChild(newDataStore);
  });
};

renderTodos(todos, filters);

document
  .querySelector("#search-text")
  .addEventListener("input", (inputData) => {
    filters.searchText = inputData.target.value;
    renderTodos(todos, filters);
  });

document.querySelector("#new-todo").addEventListener("submit", (dataGet) => {
  dataGet.preventDefault();
  todos.push({
    text: dataGet.target.elements.text.value,
    completed: false,
  });
  renderTodos(todos, filters);
  dataGet.target.elements.text.value = "";
});
