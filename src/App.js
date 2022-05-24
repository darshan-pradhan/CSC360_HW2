
import './App.css';
import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import appReducer from './reducers';

function App() {

  //const [user, setUser] = useState("");
  //const [user, dispatchUser] = useReducer(userReducer, "")
  //const [todo, dispatchTodos] = useReducer(todoReducer, []) 
  //const [todo, setTodos] = useState([])
  const [ state, dispatch ] = useReducer(appReducer, { user: '', todo: []})
  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreateTodo user={state.user} Todo={state.todo} dispatch={dispatch} />}
      <TodoList todos={state.todo} dispatch={dispatch} />
    </div>
  );
}

export default App;
