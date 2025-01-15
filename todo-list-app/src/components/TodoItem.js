import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo">
      <div className="todo-text">{todo.text}</div>
        {/* Add checkbox for toggle complete */}
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
        />
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
