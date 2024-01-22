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
  drawer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: 0,
    top: 0,
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderLeft: "1px solid #ddd",
    padding: "20px",
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.app)}>
          <div className={css(styles.headingSection)}>
            <Notifications
              listNotifications={this.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header showDrawer={this.handleDisplayDrawer} />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list" styles={styles.bodySection}>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue" styles={styles.bodySection}>
              <Login />
            </BodySectionWithMarginBottom>
          )}

          {this.state.displayDrawer && (
            <div className={css(styles.drawer)}>
              <p>Drawer Content Goes Here</p>
              <button onClick={this.handleHideDrawer}>Close Drawer</button>
            </div>
          )}

          <BodySection title="News from the School" styles={styles.bodySection}>
            <p>Some random text for the news section.</p>
          </BodySection>
          <Footer styles={styles.footer} />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

