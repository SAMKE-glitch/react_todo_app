import React, { useState } from "react";
import '../styles/TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: input.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0) {
      addTodo(newTodo);
      setInput("");
    } else {
      alert("Enter a valid task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-btn" type="submit">Add Todo</button>

    </form>
  );
};

export default TodoForm;
