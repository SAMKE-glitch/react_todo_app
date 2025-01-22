# **To-Do List Application (Frontend Only)**
This is a React-based To-Do List application where users can add, edit, delete, and mark tasks as completed. The application uses localStorage to persist tasks on the user's browser even after the page reloads.
## Table of Contents
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
* [Functionality](#functionality)
* [How it Works](#how-it-works)
* [Project Structure](#project-structure)
* [License](#license)
* [Acknowledgment](#acknowledgment)

## **Features**
- **React Components:** The app is built using React functional components.
- **State Management:** useState hook is used for managing the state of tasks and editing state.
- **Side Effects:** useEffect hook is used to retrieve tasks from localStorage and save tasks to localStorage whenever tasks are updated.
- **Persistent Storage:** Tasks are saved in localStorage, allowing data to persist even after refreshing the page.

## **Technologies Used**
- **React:** A JavaScript library for building user interfaces.
- **React Hooks:**
    - **useState:** For managing state in functional components.
    - **useEffect:** For handling side effects, such as saving and retrieving tasks from localStorage.
- **CSS:** For styling the application.

## **Getting Started**
### **Prerequisites**
- **Node.js** and **npm (Node package manager)** installed on your system.

## **Installation**
### 1. Clone the repository:
```bash
git clone https://github.com/SAMKE-glitch/react_todo_app.git
```
### 2. Navigate into the project directory:
```bash
cd react_todo_app/todo-list-app
```
### 3. Install dependencies:
```bash
npm install
```
### 4. Start the development server:
```bash
npm start
```
This will start the app on http://localhost:3000. Open this URL in your browser.

## **Functionality**
- **Add a Todo:** You can add a new task to the list.
- **Edit a Todo:** Clicking "Edit" allows you to update a task.
- **Delete a Todo:** Clicking "Delete" removes a task from the list.
- **Mark as Complete:** Toggle the checkbox to mark a task as complete or incomplete.

### **How It Works**
### **LocalStorage Integration**
- **Retrieving Tasks:** Upon the app's initial load, the tasks are retrieved from **localStorage** (if any).
```bash
useEffect(() => {
  const json = localStorage.getItem("todos");
  const loadedTodos = JSON.parse(json);
  if (loadedTodos) {
    setTodos(loadedTodos);
  }
}, []);

```
- **Saving Tasks:** Whenever the list of tasks is updated (like adding or deleting tasks), the ```useEffect``` hook ensures that the new list is saved to **localStorage.**
```bash
useEffect(() => {
  if (todos.length > 0) {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }
}, [todos]);

```
This allows the app to persist tasks even after the page is reloaded.