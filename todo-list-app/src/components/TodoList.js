import React from "react";
import TodoItem from "./TodoItem";
import '../styles/TodoList.css';

const TodoList = ({ todos, deleteTodo, toggleComplete, todoEditing, setTodoEditing, submitEdits }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          todoEditing={todoEditing}
          setTodoEditing={setTodoEditing}
          submitEdits={submitEdits}
        />
      ))}
    </div>
  );
};

export default TodoList;
