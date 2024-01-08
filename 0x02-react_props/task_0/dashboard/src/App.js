import './App.css';
import '../src/Header/Header.css';
import '../src/Login/Login.css';
import '../src/Footer/Footer.css';
import Header from './Header/Header';
import Notifications from './Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Notifications/>
      <Header/>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <Login/>  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
