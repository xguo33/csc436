import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

import TodoList from './TodoList';
import CreateTodo from './CreateTodo';




function App() {

  const [todos, setTodos] =useState([])  
  return (
    <div className="app">
      <h1>Hw2 react App</h1>

      <div className="user-auth-section">
        <Login />
        <p></p>
        <Register />
        <p></p>
        <Logout />
        <p></p>
       
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
