
// DOM object reference and task item DOM reference //
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// 1. Created a new task item 2. Styled new task item 3. Added the text 4. Appended this element to the task list //
var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

 // On a button click create a task! (uses "createTaskHandler" as a Callback function) //
buttonEl.addEventListener("click", createTaskHandler);
