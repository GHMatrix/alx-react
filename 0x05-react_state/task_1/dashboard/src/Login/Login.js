import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    // Add any additional login logic here
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const emailValue = event.target.value;
    this.setState({ email: emailValue, enableSubmit: emailValue !== '' && this.state.password !== '' });
  }

  handleChangePassword(event) {
    const passwordValue = event.target.value;
    this.setState({ password: passwordValue, enableSubmit: passwordValue !== '' && this.state.email !== '' });
  }

  render() {
    return (
      <form className={css(styles.loginForm)} name="login" role="form" onSubmit={this.handleLoginSubmit}>
        <label className={css(styles.label)} htmlFor="email">
          Email:
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </label>
        <label className={css(styles.label)} htmlFor="password">
          Password:
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <input
          className={css(styles.button)}
          type="submit"
          value="OK"
          disabled={!this.state.enableSubmit}
        />
      </form>
    );
  }
}

export default Login;
