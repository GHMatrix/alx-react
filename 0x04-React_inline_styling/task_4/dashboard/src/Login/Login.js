import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginForm: {
    margin: '20px', // Adjust the margin as needed
  },
  label: {
    display: 'block',
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '5px',
    margin: '5px 0',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
  },
});

const Login = () => {
  return (
    <form className={css(styles.loginForm)} name='login' role='form'>
      <label className={css(styles.label)} htmlFor="email">Email:</label>
      <input className={css(styles.input)} type="email" id="email" name="email" />
      <label className={css(styles.label)} htmlFor="password">Password:</label>
      <input className={css(styles.input)} type="password" id="password" name="password" />
      <button className={css(styles.button)} type="submit">OK</button>
    </form>
  );
}

export default Login;
