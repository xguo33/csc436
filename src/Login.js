import React, { useState } from 'react';

  export default function Login({ userState, dispatchUser }) {
    const [username, setUsername] = useState(userState.username || '');
    const [password, setPassword] = useState(''); // Initialize password state
  
    function handleUsername(evt) {
      setUsername(evt.target.value);
    }
  
    function handlePassword(evt) {
      setPassword(evt.target.value);
    }
  
    const handleLogin = (e) => {
      e.preventDefault();
      dispatchUser({ type: 'LOGIN', username });
      setUsername(''); // Clear the username field
      setPassword(''); // Clear the password field
    };
  
    return (
      <form onSubmit={handleLogin}>
        <label htmlFor="login-username">Username:</label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          value={password}
          onChange={handlePassword}
        />
        <input type="submit" value="Login" disabled={username.length === 0} />
      </form>
    );
  }
  
