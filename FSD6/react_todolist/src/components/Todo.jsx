import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
function Todo({task,toggleComplete,deleteTodo}) {
  return (
    <div className='Todo'>
      <p   className={`${task.completed? "completed":"incompleted"}`}  onClick={()=> toggleComplete(task.id)}> {task.task}   </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon'/>
        <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
