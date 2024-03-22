let addTaskBtn = document.querySelector("#addTaskBtn");
let newTaskInput = document.querySelector("#newTask"); //college
let todoList = document.querySelector("#todoList");


let draggingTask=null;

function createTaskElement(taskText) {
  let taskElement = document.createElement("div");
  taskElement.innerHTML = `
 <span>${taskText}</span>
 <button class="editTask">Edit</button>
 <button class="deleteTask">Delete</button>
 `;

 let deleteBtn=taskElement.querySelector(".deleteTask")
  deleteBtn.addEventListener("click",()=>{
    taskElement.remove();
  })

  let editBtn=taskElement.querySelector(".editTask");
  editBtn.addEventListener("click",()=>{
    let newTaskText=prompt("edit the task",taskText)
    if(newTaskText !== ""){
      taskElement.querySelector("span").innerText=newTaskText 
    }
  })

  // dragstart dragend
  taskElement.draggable=true

  taskElement.addEventListener("dragstart",()=>{
    draggingTask=taskElement;
    taskElement.classList.add("dragging")

  })
  taskElement.addEventListener("dragend",()=>{
    taskElement.classList.remove("dragging")
    draggingTask=null
  })


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

todoList.addEventListener("dragover",function(event){
  event.preventDefault();
  let draggableElement=document.querySelector(".dragging")
  todoList.appendChild(draggableElement)
})