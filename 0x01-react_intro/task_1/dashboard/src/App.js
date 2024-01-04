import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" height="200px" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </div>
      <footer className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
