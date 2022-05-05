import React from "react";

export default function Todo({ title, description, dateCreated, complete, dateCompleted, updateTodos, index}) {
  function handleCheckbox(event){
    const newTodo = {
      title,
      description,
      complete: event.target.checked,
      dateCreated,
      dateCompleted: Date.now(),
    }
    updateTodos(index, newTodo)
  }
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      Date Created: {dateCreated}
      <br/>
      Complete {complete}
      <br />
      Date Completed: {dateCompleted}
      <br />
      <input type="checkbox" value={complete} onChange={handleCheckbox}/>
    </div>
  );
}