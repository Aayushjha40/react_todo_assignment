function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
