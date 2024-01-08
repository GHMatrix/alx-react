import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifcations/Notifications';

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
