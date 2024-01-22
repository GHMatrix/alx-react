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
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // ... Rest of the code remains the same

  render() {
    // Use the user and logOut values from the local state
    const { user, displayDrawer } = this.state;

    return (
      <React.Fragment>
        <AppContext.Provider value={{ user, logOut: this.logOut }}>
          <div className={css(styles.app)}>
            <div className={css(styles.headingSection)}>
              <Notifications
                listNotifications={this.listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
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
