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

  const [todos, setTodos] =useState([])  
  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);
  

  return (
    <div className="app">
      <h1>Hw2 react App</h1>


      <div className="user-auth-section">
        <Login userState={userState} dispatchUser={dispatchUser} />
        <Register userState={userState} dispatchUser={dispatchUser} />
        <Logout userState={userState} dispatchUser={dispatchUser} />
      </div>


    <div className='Todo'>
      <TodoList todos={todos} setTodos = {setTodos}/>
      <p></p>
      <CreateTodo todos ={todos} setTodos = {setTodos}/>
    </div>


    </div>
    );
    
}

export default App;
