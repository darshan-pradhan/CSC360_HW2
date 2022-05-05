import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], setTodos }) {
    function updateTodos(index, newTodo){
        const updatedState = [...todos]
        updatedState[index] = newTodo
        setTodos(updatedState)
    }
    return (
    <div>
      {todos.map((p, i) => (
        <Todo {...p} updateTodos={updateTodos} index={i} key={"Todo-" + i} />
      ))}
    </div>
  );
}