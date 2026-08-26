# React To-Do List Assignment

## Project Overview

This project is a simple interactive **To-Do List application built with React and Vite**. It is designed for an academic assignment on React fundamentals.

The application demonstrates:

- React functional components
- Component-based UI design
- `useState` for state management
- State changes with immutable updates
- Props for passing data and callback functions
- Controlled form inputs
- Event handling
- Rendering lists with `.map()`
- Unique `key` props
- Conditional rendering
- Basic React best practices

## Features

The user can:

1. Add a new todo.
2. View all todo items.
3. Mark a todo as completed.
4. Delete a todo.
5. Clear all completed todos.
6. See the total number of tasks and completed tasks.

## Technology Stack

- React
- JavaScript
- Vite
- HTML
- CSS

## Requirements

Install the following before running the project:

- Node.js (modern LTS version recommended)
- npm
- VS Code or another code editor
- A modern web browser

Check installation:

```bash
node --version
npm --version
```

## Installation

Extract the ZIP and open a terminal in the project directory.

Install dependencies:

```bash
npm install
```

## Run the Application

Start the Vite development server:

```bash
npm run dev
```

Vite will show a local address such as:

```text
http://localhost:5173/
```

Open that address in your browser.

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```text
react-todo-assignment/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── README.md
└── .gitignore
```

## How React Concepts Are Demonstrated

### 1. Components

The application is divided into reusable components:

- `App` — owns the main todo state and application logic.
- `TodoInput` — handles the controlled input and add action.
- `TodoList` — receives the todo collection through props and renders the list.
- `TodoItem` — displays one todo and receives data/actions through props.

### 2. State Management

The main state is defined in `App.jsx`:

```jsx
const [todos, setTodos] = useState([]);
```

`todos` stores the current list and `setTodos` changes the state.

The input also has local state in `TodoInput`:

```jsx
const [text, setText] = useState("");
```

### 3. Adding Items

The child component calls the function supplied by its parent:

```jsx
onAddTodo(trimmedText);
```

The parent updates its state:

```jsx
setTodos((currentTodos) => [...currentTodos, newTodo]);
```

A new array is created rather than modifying the existing state directly.

### 4. Passing Props

`App` passes data and callbacks to `TodoList`:

```jsx
<TodoList
  todos={todos}
  onDelete={deleteTodo}
  onToggle={toggleTodo}
/>
```

`TodoList` then passes the individual todo and callbacks to `TodoItem`.

### 5. Updating State

The completion status is changed using `map()`:

```jsx
setTodos((currentTodos) =>
  currentTodos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  )
);
```

This follows the React practice of creating new state instead of mutating the existing array/object.

### 6. Deleting Items

Deletion uses `filter()`:

```jsx
setTodos((currentTodos) =>
  currentTodos.filter((todo) => todo.id !== id)
);
```

### 7. Keys

Each rendered `TodoItem` has a unique key:

```jsx
<TodoItem key={todo.id} ... />
```

Keys help React identify list items when the UI changes.

## Assignment Demonstration

For your assignment submission, demonstrate these actions:

### Test 1: Add todo

Enter:

```text
Complete React assignment
```

Click **Add**.

Expected result: the task appears in the list.

### Test 2: Add multiple todos

Add:

```text
Study React
Practice JavaScript
Prepare presentation
```

Expected result: all tasks appear.

### Test 3: Complete a todo

Click the checkbox.

Expected result: the todo is shown with a strikethrough and the completed counter increases.

### Test 4: Delete a todo

Click **Delete**.

Expected result: the selected todo is removed.

### Test 5: Clear completed

Complete one or more todos and click **Clear completed**.

Expected result: completed todos disappear.

## Suggested Screenshots

Take screenshots for your assignment report:

1. Project running with an empty todo list.
2. Application with multiple todo items.
3. A completed todo.
4. Browser developer tools showing React/console if required by your instructor.
5. VS Code showing the component structure.
6. `App.jsx` showing `useState`.
7. `TodoList.jsx` showing props and `.map()`.
8. `TodoItem.jsx` showing props and event handlers.

## Common Problems

### `npm` is not recognized

Install Node.js and restart your terminal.

### Page does not open

Make sure you ran:

```bash
npm run dev
```

and opened the URL printed by Vite.

### Changes are not visible

Save your file and check the terminal for compilation errors.

### Blank page

Check the browser console and terminal for JavaScript errors.

## GitHub Submission Guide

If your assignment requires a GitHub repository:

```bash
git init
git add .
git commit -m "Create React todo application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/react-todo-assignment.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

Do not upload unnecessary generated files such as `node_modules`.

## Learning Outcomes

After completing this project, you should be able to explain:

- What a React component is.
- Why state is needed for interactive interfaces.
- How `useState` works at a basic level.
- How state changes cause React to re-render the UI.
- How props transfer data from parent to child components.
- How callback props allow child components to request changes.
- Why state should be updated immutably.
- Why list items need stable keys.
- How controlled inputs work in React.

## Submission

Submit:

1. Your GitHub repository link.
2. Screenshots of the working application if requested.
3. Any report/document required by your instructor.

Before submitting, make sure:

```bash
npm install
npm run build
```

both complete successfully.

## Notes

This is an educational project. Todo data is stored only in React state, so refreshing the page clears the tasks. A production application could add persistent storage such as a database or browser storage.
