let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document
  .querySelector("#search-text")
  .addEventListener("input", (getSearchText) => {
    filters.searchText = getSearchText.target.value;
    renderTodos(todos, filters);
  });

document.querySelector("#new-todo").addEventListener("submit", (newAdd) => {
  newAdd.preventDefault();
  todos.push({
    id: uuidv4(),
    text: newAdd.target.elements.text.value,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  newAdd.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", (checkboxValueGet) => {
    filters.hideCompleted = checkboxValueGet.target.checked;
    renderTodos(todos, filters);
  });
