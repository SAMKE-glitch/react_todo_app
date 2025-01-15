import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo">
      <div className="todo-text">
        <p>{todo.text}</p>
        {/* Add checkbox for toggle complete */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
