import React, { useState } from "react";

export default function Todo({ 
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
  id,
  updateTodo,
  deleteTodo}) {
  /*function handleCheckbox(event){
    const newTodo = {
      title,
      description,
      complete: event.target.checked,
      dateCreated,
      dateCompleted: Date.now(),
    }
    updateTodos(index, newTodo)
  }*/
  const [checked, updateChecked] = useState(false)
  const handleToggleEvent = (event) => {
    updateChecked(event.target.checked)
    const updatedTodo = {title, description, dateCreated, complete:!complete, dateCompleted: Date.now(), id, updateTodo, deleteTodo}
    updateTodo(id,updatedTodo)
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      Date Created: {new Date(dateCreated).toDateString()}
      <br/>
      Complete {complete}
      <br />
      Date Completed: {complete ? new Date(dateCompleted).toDateString() : 'Not yet completed'}
      <br />
      <input type="checkbox" value={checked} onChange={handleToggleEvent}/>
    </div>
  );
}