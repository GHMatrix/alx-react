import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifcations/Notifications';

function App() {
  // Define the listNotifications array
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'default', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  return (
    <div className="App">
      {/* Pass the listNotifications array as a prop to Notifications */}
      <Notifications listNotifications={listNotifications} />
      <Header />
      <main className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;

