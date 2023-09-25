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
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (dataGet) => {
  filters.searchText = dataGet.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", (dataGet) => {
  dataGet.preventDefault();
  todos.push({
    text: dataGet.target.elements.text.value,
    completed: false,
  });
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", (dataGet) => {
    filters.hideCompleted = dataGet.target.checked;
    renderTodos(todos, filters);
  });

// document.querySelectorAll("button")[1].addEventListener("click", ()=> {
//   const pTag = document.querySelectorAll("p");
//   pTag.forEach((pData) => {
//     pData.remove();
//   });
// });
