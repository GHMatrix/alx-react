import logo from '../src/Holberton Logo.jpg';
import './App.css';

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
        Copyright 2020 - holberton School
        </p>
      </footer>
    </div>
  );
}
