import React, {useState,useEffect} from "react";
import './styles/App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]); // Initializes an empty array for the To-Do list.
  const [todoEditing, setTodoEditing] = useState(null); // State for editing Initializes null to indicate no todo is being edited.
  
  
  // Load todos from localStorage when the app starts
  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []); // Empty dependency array ensures this runs only once (on mount)


  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    if (todos.length > 0) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }, [todos]); // This effect runs whenever the todos state changes

  // add Todo logic
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // delete Todo logic
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Toggle Todo completion logic
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Submit the edits for a todo
  const submitEdits = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        item.text = document.getElementById(todo.id).value; // Get the updated value
      }
      return item;
    });
    setTodos(updatedTodos);
    setTodoEditing(null); // Exit editing mode
  };

  return (
    <div className="app-container">
      <Header />
      <div id="todo-list">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          todoEditing={todoEditing}
          setTodoEditing={setTodoEditing}
          submitEdits={submitEdits}
        />
      </div>
    </div>
  );
};

export default App;
