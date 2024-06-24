import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4(); //instance
function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  //sleep
  const addTodo = (todo) => {
    const newTodos=[
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];

    setTodos(newTodos);
    localStorage.setItem('todos',JSON.stringify(newTodos))

  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask =(task,id)=>{
    setTodos(todos.map((todo)=> todo.id === id?{...todo,task,isEditing:!todo.isEditing}:todo))
  }
 

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm task={todo} editTodo={editTask}/>
        ) : (
          <Todo
            task={todo}
            id={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
