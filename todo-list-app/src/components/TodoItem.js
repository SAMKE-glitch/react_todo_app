import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, deleteTodo, toggleComplete, todoEditing, setTodoEditing, submitEdits }) => {
    return (
        <div className="todo">
          <div className="todo-text">
            {/* Conditional rendering for edit mode */}
            {todo.id === todoEditing ? (
              <>
                <input
                  type="text"
                  id={todo.id}
                  defaultValue={todo.text}
                  className="edit-input"
                />
              </>
            ) : (
              <div className={todo.completed ? "completed" : ""}>{todo.text}</div> // Apply completed class conditionally
            )}
      
            {/* Keep the checkbox visible during editing */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
          </div>
      
          <div className="todo-actions">
            {/* Conditional rendering of button (Edit or Submit Edits) */}
            {todo.id === todoEditing ? (
              <button className="submit-btn" onClick={() => submitEdits(todo)}>
                Submit Edits
              </button>
            ) : (
              <button className="edit-btn" onClick={() => setTodoEditing(todo.id)}>
                Edit
              </button>
            )}
      
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
    );
      
};

export default TodoItem;
