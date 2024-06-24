import React, { useState } from 'react'

function EditTodoForm({editTodo,task}) {

    const [value,setValue]=useState(task.task)

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        editTodo(value,task.id)
        
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' value={value}placeholder='update task' className='todo-input' onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default EditTodoForm