import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="todo-text">{todo.text}</div>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
