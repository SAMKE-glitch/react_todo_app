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