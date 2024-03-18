//app.js
// this code is till what was taught in class

let todoList = document.getElementById("todoList");
let addTaskBtn = document.getElementById("addTaskBtn");
let newTaskInput = document.getElementById("newTask");

let draggingTask = null;

function createTaskElement(taskText) {
  let taskElement = document.createElement("div");
  taskElement.innerHTML = `
        <span>${taskText}</span>
        <button class="editTask"> Edit </button>
        <button class="deleteTask"> Delete </button>
    `;

  let deleteBtn = taskElement.querySelector(".deleteTask");
  deleteBtn.addEventListener("click", function () {
    taskElement.remove();
  });

  let editBtn = taskElement.querySelector(".editTask");
  editBtn.addEventListener("click", function () {
    let newTaskText = prompt("edit the task", taskText);
    if (newTaskText !== "") {
      taskElement.querySelector("span").innerText = newTaskText;
    }
    taskText = newTaskText;
  });
  // dragstart dragend dragover

//   taskElement.draggable = true; //by default false

//   taskElement.addEventListener("dragstart", function () {
//     draggingTask = taskElement;
//     taskElement.classList.add("dragging");
//   });

//   taskElement.addEventListener("dragend", function () {
//     taskElement.classList.remove("dragging");
//     draggingTask = null;
//   });

  return taskElement;
}

addTaskBtn.addEventListener("click", function () {
  let taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    let taskElement = createTaskElement(taskText);
    todoList.appendChild(taskElement);
    newTaskInput.value = "";
  }
});

// todoList.addEventListener("dragover", function (event) {
//   event.preventDefault();
//   let draggableElement = document.querySelector(".dragging");
//   todoList.appendChild(draggableElement);
// });
