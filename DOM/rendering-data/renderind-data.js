const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Bali",
  },
  {
    title: "Habbits to work on",
    body: "Exercise, eating a bit better.",
  },
  {
    title: "office modification",
    body: "Get a new seat",
  },
];

const filters = { searchText: "" };

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector("#search-text").addEventListener("input", (inpuData) => {
  filters.searchText = inpuData.target.value;
  renderNotes(notes, filters);
});

//use forreturn !filters.hideCompleted;
