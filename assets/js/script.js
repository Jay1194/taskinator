
// DOM object reference and task item DOM reference //
var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// 1. Created a new task item 2. Styled new task item 3. Added the text 4. Appended this element to the task list //
var createTaskHandler = function(event) {
    event.preventDefault();
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

 // Click button or press enter key to submit (uses "createTaskHandler" as a Callback function) //
formE1.addEventListener("submit", createTaskHandler);
