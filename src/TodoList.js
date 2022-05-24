import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch}) {
    /*function updateTodos(index, newTodo){
        const updatedState = [...todos]
        updatedState[index] = newTodo
        setTodos(updatedState)
    }*/
    const updateTodo = (id, updatedTodo) => {
      const updatedTodos = todos.map((todo) => todo.id === id ? updatedTodo : todo)
      dispatch({type: 'TOGGLE_TODO', updatedTodos})
    }

    const deleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      dispatch( {type: 'DELETE_POST', updatedTodos})
    }

    return (
    <div>
      {todos.map((p, i) => (
        <Todo {...p} updateTodo={updateTodo} deleteTodo={deleteTodo} key={p.id} />
      ))}
    </div>
  );
}