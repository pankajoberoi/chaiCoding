let addTaskbtn=document.querySelector("#addTaskBtn")
let newTaskInput=document.querySelector("#newTask")
let todoList=document.querySelector("#todolist")


function createTaskElement(taskText){
    let taskElement=document.createElement("div")
    taskElement.innerHTML=`  
    <span>${taskText}</span>
    <button class="editTask">Edit</button>
    <button class="deleteTask">Delete</button>
    `;

    let deleteBtn=taskElement.querySelector(".deleteTask")
    deleteBtn.addEventListener("click",()=>{
        taskElement.remove();
    })

    let editBtn=taskElement.querySelector(".editTask")
    editBtn.addEventListener("click",()=>{
        let newTasktext=prompt("edit the task",taskText)
        if(newTaskInput !== ""){
            taskElement.querySelector("span").innerText=newTasktext
        }
    })



    return taskElement
}


addTaskbtn.addEventListener("click",function () {
    let taskText=newTaskInput.value.trim()

    if(taskText !== ""){
        let taskElement=createTaskElement(taskText)
        todoList.appendChild(taskElement);
        newTaskInput.value = ""
    }
    
})

