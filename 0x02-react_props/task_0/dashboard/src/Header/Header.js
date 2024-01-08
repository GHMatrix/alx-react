import React from 'react';
import logo from '../holberton-logo.jpeg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" width="200px" height="200px" />
            <h1>School dashboard</h1>
        </header>

    );
}

export default Header;
