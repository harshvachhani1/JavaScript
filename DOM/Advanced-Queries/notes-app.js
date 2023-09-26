const notes = [
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

document.querySelector("#create").addEventListener("click", (targetValue) => {
  // targetValue.target.textContent = "Create Button Click";
});

document.querySelector("#remove").addEventListener("click", (targetValue) => {
  document.querySelectorAll("p").forEach(function (note) {
    note.remove();
  });
});
