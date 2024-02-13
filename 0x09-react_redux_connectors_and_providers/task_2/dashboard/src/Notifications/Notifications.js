import React, { PureComponent } from "react";
import { StyleSheet, css, keyframes } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends PureComponent {
  render() {
    const fadeIn = keyframes({
      "0%": { opacity: 0.5 },
      "100%": { opacity: 1 },
    });

    const bounce = keyframes({
      "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
      "40%": { transform: "translateY(-5px)" },
      "60%": { transform: "translateY(5px)" },
    });

    return (
      <React.Fragment>
        <div
          className={css(styles.menuItem, this.props.displayDrawer && styles.menuItemHidden)}
          onClick={this.props.handleDisplayDrawer}
        >
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p className={css(styles.notificationText)}>Here is the list of notifications</p>
            ) : null}
            <ul className={css(styles.ul)}>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem type="default" value="No new notification for now" />
              ) : null}
              {this.props.listNotifications.map((val, idx) => {
                return (
                  <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={() => this.props.markNotificationAsRead(val.id)}
                    id={val.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
    position: "fixed",
    top: "10px",
    right: "10px",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    animationName: fadeIn,
    animationDuration: "1s",
    animationIterationCount: 3,
    zIndex: 1,
    ":hover": {
      animationName: [fadeIn, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
    },
  },

  menuItemHidden: {
    display: "none",
  },

  Notifications: {
    padding: 0,
    border: "2px dashed red",
    position: "absolute",
    top: "0",
    right: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    fontSize: "20px",
  },

  ul: {
    padding: 0,
    listStyle: "none",
  },

  notificationText: {
    marginBottom: "10px",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
