# **To-Do List Application (Frontend Only)**
This is a React-based To-Do List application where users can add, edit, delete, and mark tasks as completed. The application uses `localStorage` to persist tasks on the user's browser even after the page reloads.
## Table of Contents
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
* [Functionality](#functionality)
* [How it Works](#how-it-works)
* [Project Structure](#project-structure)
 [Screenshot](#screenshot)
* [Acknowledgment](#acknowledgment)
* [Contributing](#contributing)
* [Future Improvements](#future-improvemets)
* [License](#license)

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
### Adding a Todo
When a user submits the form in `TodoForm.js`, the `addTodo` function is called. This function creates a new task object and updates the `todos` state using the `setTodos` function from the `useState` hook.
### **LocalStorage Integration:**
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

---

## **Screenshot**
![To-Do List App Screenshot](/examplescrn.png)

---

## **Project Structure**
```bash
react_todo_app/
├── public/                  # Static assets
│   ├── index.html           # Main HTML file
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # Robots exclusion file
├── src/                     # Source code
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point for the app
│   ├── index.css            # Global styles
│   ├── components/          # Reusable components
│   │   ├── Header.js        # Header component
│   │   ├── TodoForm.js      # Form for adding todos
│   │   ├── TodoItem.js      # Individual todo item
│   │   └── TodoList.js      # List of todos
│   └── styles/              # Component-specific styles
│       ├── App.css          # Styles for App.js
│       ├── Header.css       # Styles for Header.js
│       ├── TodoForm.css     # Styles for TodoForm.js
│       ├── TodoItem.css     # Styles for TodoItem.js
│       └── TodoList.css     # Styles for TodoList.js
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## **Acknowledgments**
- **React:** - [React Documentation](https://reactjs.org/docs/getting-started.html) for providing excellent guidance on React hooks and components.
- **localStorage:** - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for detailed information on `localStorage.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.


## Future Improvements
- Add user authentication to allow multiple users to manage their own tasks.
- Implement a backend to store tasks in a database instead of localStorage.
- Add drag-and-drop functionality to reorder tasks.

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.