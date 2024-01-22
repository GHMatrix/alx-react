import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpeg';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  appHeader: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    position: 'relative',
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
  logoutSection: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '1.2em',
  },
  logoutLink: {
    color: 'white',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

class Header extends React.Component {
  static contextType = AppContext; // ContextType API for accessing context

  render() {
    const { user } = this.context;

    return (
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.appName)}>School dashboard</h1>

        {user.isLoggedIn && (
          <section className={css(styles.logoutSection)} id="logoutSection">
            Welcome {user.email} (<span className={css(styles.logoutLink)} onClick={this.context.logOut}>logout</span>)
          </section>
        )}
      </header>
    );
  }
}

export default Header;
