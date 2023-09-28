const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean kitchen",
    completed: true,
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
  hideCompleted: false,
};

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach((todo) => {
    const dataGet = document.createElement("p");
    dataGet.textContent = todo.text;
    document.querySelector("#todos").appendChild(dataGet);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (valueGet) => {
  filters.searchText = valueGet.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", (newData) => {
  newData.preventDefault();
  todos.push({
    text: newData.target.elements.text.value,
    completed: false,
  });
  renderTodos(todos, filters);
  newData.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", (hideData) => {
    filters.hideCompleted = hideData.target.checked;
    renderTodos(todos, filters);
  });
