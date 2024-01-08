import React from 'react';
import logo from '../assets/holberton-logo.jpeg';
import '../Header/Header.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" width="200px" height="200px" />
            <h1>School dashboard</h1>
        </header>

    );
}

export default Header;
