
import Todo from "./Todo";
import { useContext } from "react";
import { StateContext } from "./contexts";

export default function TodoList({ todos = [] }) {
  const { dispatch } = useContext(StateContext);

  const handleToggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}  
          {...todo}
          onToggleComplete={() => handleToggleComplete(todo.id)}
          onDeleteTodo={() => handleDeleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}
