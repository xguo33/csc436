import React, { useState } from 'react';
import { userReducer, initialUserState} from './reducer';
import { useReducer } from 'react';
import './App.css';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import './App.css';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

function App() {

  const [todos, setTodos] =useState([])  ;
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
  
  const handleCreateTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  // 在此处使用 dispatchUser 更新用户状态
    dispatchUser({ type: 'UPDATE_USER', username: userState.username, isLoggedIn: true });
  };
  
  return (
    <div className="app">
      <h1>Lab3 Todo react App</h1>


      <div className="user-auth-section">
        <Login userState={userState} dispatchUser={dispatchUser} />
        <Register userState={userState} dispatchUser={dispatchUser} />
        <Logout userState={userState} dispatchUser={dispatchUser} />
      </div>


    <div className='Todo'>
      <TodoList todos={todos} setTodos = {setTodos}/>
      <p></p>
      <CreateTodo user={userState.username} onCreateTodo={handleCreateTodo} setTodos={setTodos} todos={todos} />
      

    </div>


    </div>
    );
    
}

export default App;