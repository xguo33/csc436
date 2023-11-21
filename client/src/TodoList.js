import Todo from "./Todo";
import { useContext } from "react";
import { StateContext } from "./contexts";
import { useResource } from "react-request-hook";

export default function TodoList({ todos = [] }) {
  const { dispatch } = useContext(StateContext);

  // 使用 useResource 钩子创建更新 Todo 的函数
  const [updateTodo, { isLoading, error }] = useResource(({ id, ...updatedFields }) => ({
    url: `/todos/${id}`,
    method: 'PATCH',
    data: updatedFields,
  }));

  const handleToggleComplete = (id) => {
    // 触发 TOGGLE_TODO 动作
    dispatch({ type: 'TOGGLE_TODO', id });

    // 发起更新请求
    updateTodo({ id, complete: true }); // 根据你的需要更新请求的字段
  };

  const handleDeleteTodo = (id) => {
    // 触发 DELETE_TODO 动作
    dispatch({ type: 'DELETE_TODO', id });

    // 发起删除请求
    updateTodo({ id }); // 根据你的需要更新请求的字段
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
