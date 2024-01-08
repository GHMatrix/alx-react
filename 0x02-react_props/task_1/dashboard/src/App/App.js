import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Notifications/>
      <Header/>
      <main className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <Login/>  
      </main>
      <Footer/>
    </div>
  );
}

export default App;
