import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpeg';

const styles = StyleSheet.create({
  appHeader: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
  },
  appLogo: {
    width: '200px',
    height: '200px',
    border: '2px solid white',
    borderRadius: '50%',
  },
  appName: {
    fontSize: '2em',
    margin: '10px 0 0 0',
  },
});

const Header = () => {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 className={css(styles.appName)}>School dashboard</h1>
    </header>
  );
}

export default Header;
