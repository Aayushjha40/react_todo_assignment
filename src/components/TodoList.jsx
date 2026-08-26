import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>
        <p>No tasks yet.</p>
        <span>Add your first task above.</span>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
