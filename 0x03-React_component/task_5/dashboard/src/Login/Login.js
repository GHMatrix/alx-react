import React from 'react';
import '../Login/Login.css';
const Login = () => {
    return (
        <form name='login' role='form'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">OK</button>
        </form>
    );
}

export default Login;
