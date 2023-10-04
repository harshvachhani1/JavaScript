const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign("index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("input", (updateTime) => {
  note.title = updateTime.target.value;
  note.updatedAt = moment().valueOf(); //moment is js libray
  saveNotes(notes);
});

bodyElement.addEventListener("input", (updateText) => {
  note.body = updateText.target.value;
  note.updatedAt = moment().valueOf(); //valueOf() use milliseconds
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeElement.addEventListener("click", () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("index.html");
});

window.addEventListener("storage", (newWindowData) => {
  if (e.key === "notes") {
    notes = JSON.parse(newWindowData.newValue);
    note = notes.find((note) => {
      return note.id === noteId;
    });

    if (!note) {
      location.assign("index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
