let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document
  .querySelector("#search-text")
  .addEventListener("input", (SearchTxt) => {
    filters.searchText = SearchTxt.target.value;
    renderTodos(todos, filters);
  });

document.querySelector("#new-todo").addEventListener("submit", (newText) => {
  const text = newText.target.elements.text.value.trim();
  newText.preventDefault();

  if (text.length > 0) {
    todos.push({
      text: text, //also write like text
      completed: false,
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    newText.target.elements.text.value = "";
  }
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", (hideText) => {
    filters.hideCompleted = hideText.target.checked;
    renderTodos(todos, filters);
  });
