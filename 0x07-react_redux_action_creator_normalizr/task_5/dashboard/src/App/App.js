import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import AppContext from "../App/AppContext"; // Import the AppContext

const styles = StyleSheet.create({
  app: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  headingSection: {
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  bodySection: {
    padding: "20px",
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#f5f5f5",
    borderTop: "1px solid #ddd",
    padding: "10px 0",
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "", // You can set default values if needed
        password: "",
        isLoggedIn: false,
      },
      displayDrawer: false,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: getLatestNotification() },
      ],
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id),
    }));
  }

  render() {
    const { user, displayDrawer, listNotifications } = this.state;

    return (
      <React.Fragment>
        <AppContext.Provider value={{ user, logOut: this.logOut }}>
          <div className={css(styles.app)}>
            <div className={css(styles.headingSection)}>
              <Notifications
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
              />
              <Header />
            </div>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list" styles={styles.bodySection}>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue" styles={styles.bodySection}>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School" styles={styles.bodySection}>
              <p>Some random text for the news section.</p>
            </BodySection>
            <Footer styles={styles.footer} />
          </div>
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
