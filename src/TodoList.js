import Todo from './Todo';
import React from 'react';

export default function TodoList({ todos, setTodos, dispatchTodo, handleDeleteTodo,}) {
 const handleToggleComplete = (title) => {
    dispatchTodo({ type: 'TOGGLE_TODO', title });
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={`todo=${index}`}
          {...todo}
          onToggleComplete={() => handleToggleComplete(todo.title)}
          onDeleteTodo={() => handleDeleteTodo(todo.title)}
        />
      ))}
    </div>
  );
}
