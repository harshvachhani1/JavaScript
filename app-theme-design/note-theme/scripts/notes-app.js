let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited", //default set
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (newData) => {
  const id = uuidv4();
  const timeStamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timeStamp,
    updatedAt: timeStamp,
  });
  saveNotes(notes);
  location.assign(`edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (testFind) => {
  filters.searchText = testFind.target.value;
  renderNotes(notes, filters);
});

document
  .querySelector("#filter-by")
  .addEventListener("change", (valueFilter) => {
    filters.sortBy = valueFilter.target.value;
    renderNotes(notes, filters);
  });

window.addEventListener("storage", (textFind) => {
  if (textFind.key === "notes") {
    notes = JSON.parse(textFind.newValue);
    renderNotes(notes, filters);
  }
});

//Filter item by Date

// const now = moment();
// console.log(now.toString());
