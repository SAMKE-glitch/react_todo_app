import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo">
      <div className="todo-text">{todo.text}</div>
    </div>
  );
};

export default TodoItem;
