import React, {useState} from "react";

export default function CreateTodo({ user, Todo, dispatch }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescription(evt.target.value) }
  function handleCreate (evt) {  
    //const newTodo = { title, description, author: user, dateCreated: Date.now(), complete: false, dateCompleted:null }
    //setTodos([newTodo, ...Todo])
    dispatch({type: 'CREATE_TODO', title, description, author:user, dateCreated: Date.now(), complete: false, dateCompleted:undefined, id: Math.floor(Math.random()*1000000)})
  }

  return (
    <>
    <h2>Create a New Todo</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={description} onChange={handleDescription} />
      <input type="submit" value="Create"/>
    </form>
    </>

  );
}