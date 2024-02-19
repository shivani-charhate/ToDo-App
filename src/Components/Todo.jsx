import React from 'react'

function Todo({todo, delTodos,index}) {
  return (
    <div className="todo">
    <p> {todo} </p>
    <div className="actions">
      <input type="checkbox" /> 
      <button onClick={()=>delTodos(index)}>Delete</button>

    </div>
  </div>
  )
}

export default Todo
