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
  newText.preventDefault();
  todos.push({
    text: newText.target.elements.text.value,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  newText.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", (hideText) => {
    filters.hideCompleted = hideText.target.checked;
    renderTodos(todos, filters);
  });
