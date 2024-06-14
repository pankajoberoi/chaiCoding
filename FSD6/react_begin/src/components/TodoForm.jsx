import React, { useState } from 'react'

function TodoForm() {
    const [input,setInput]=useState("");

    function handleSubmit(e){
        e.preventde
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} required/>
        <button type='submit'>Add task</button>
      </form>
    </div>
  )
}

export default TodoForm
