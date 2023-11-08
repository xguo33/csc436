import React, { useState, useReducer } from 'react';
import { userReducer, initialUserState } from './reducer';
import './App.css';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function App() {
  const [todos, setTodos] = useState([]);
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
 // const [todoState, dispatchTodo] = useReducer(todoReducer, initialTodoState);

  const handleCreateTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    dispatchUser({
      type: 'CREATE_TODO',
      title: newTodo.title,
      description: newTodo.description,
      author: newTodo.author,
      dateCreated: newTodo.dateCreated,

    });
  };

  const handleDeleteTodo = (title) => {
    const updatedTodos = todos.filter((todo) => todo.title !== title);
    setTodos(updatedTodos);
  };

  
  /*const handleCompleteTodo = (title, completed) => {
    dispatchTodo({
      type: 'COMPLETE_TODO',
      title,
      completed,
    });
  };*/




  return (
    <div className="app">
      <h1>Lab3 Todo React App</h1>

      <div className="user-auth-section">
        <Login userState={userState} dispatchUser={dispatchUser} />
        <Register userState={userState} dispatchUser={dispatchUser} />
        <Logout userState={userState} dispatchUser={dispatchUser} />
      </div>

      <div className="Todo">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          dispatchTodo={dispatchUser}
          handleDeleteTodo={handleDeleteTodo}// 将handleDeleteTodo传递给TodoList
          
        />
        <p></p>
        <CreateTodo user={userState.username} onCreateTodo={handleCreateTodo} setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
