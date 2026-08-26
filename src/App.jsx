import { useState } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => !todo.completed)
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className="app">
      <section className="todo-card">
        <header className="header">
          <p className="eyebrow">React Fundamentals</p>
          <h1>My To-Do List</h1>
          <p className="subtitle">
            Add tasks, mark them complete, and remove them when finished.
          </p>
        </header>

        <TodoInput onAddTodo={addTodo} />

        <div className="summary">
          <span>{todos.length} task{todos.length === 1 ? "" : "s"}</span>
          <span>{completedCount} completed</span>
        </div>

        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />

        {completedCount > 0 && (
          <button className="clear-button" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
