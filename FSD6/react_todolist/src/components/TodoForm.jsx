import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const [value,setValue]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value){
        addTodo(value);
        setValue(' ');
        }
        
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' placeholder='What is the taskList for today?' className='todo-input' onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm