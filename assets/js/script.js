
// DOM object reference and task item DOM reference //
var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// 1. Created a new task item 2. Styled new task item 3. Added the text 4. Appended this element to the task list //
var createTaskHandler = function(event) {  
    event.preventDefault();  // prevents browser from refreshing when submitting tasks //

    var taskNameInput = document.querySelector("input[name='task-name']").value;     
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";

// add HTML content to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
  
};

 // Click button or press enter key to submit (uses "createTaskHandler" as a Callback function) //
formE1.addEventListener("submit", createTaskHandler);
