import React from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseListRow from '../CourseList/CourseList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.onSuccessfulLogin = this.onSuccessfulLogin.bind(this);
  }

  

  onSuccessfulLogin() {
    this.setState({ isLoggedIn: true });
  }
  render() {
    return (
      <div className="App">
        <div className="App__header_notifications">
          <Header/>
          <Notifications/>     
        </div>
        <main className="App-body">
          <section className="App-body__Section">
            {this.state.isLoggedIn ? <CourseListRow /> : <Login onSuccessfulLogin={this.onSuccessfulLogin}/>}
          </section> 
        </main>
        <Footer/>
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
