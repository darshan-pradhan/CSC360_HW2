
import './App.css';
import React, { useState } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

function App() {
  const [user, setUser] = useState("");
  const [todo, setTodos] = useState([])
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreateTodo user={user} Todo={todo} setTodos={setTodos} />}
      <TodoList todos={todo} setTodos={setTodos} />
    </div>
  );
}

export default App;
