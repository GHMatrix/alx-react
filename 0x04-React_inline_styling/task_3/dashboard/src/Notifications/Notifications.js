import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
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
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
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
                    markAsRead={this.markAsRead}
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
  Notifications: {
    padding: 0, // Remove padding for the entire panel
    border: "2px dashed red",
    position: "absolute",
    top: "0", // Adjust top position as needed
    right: "0",
    width: "100%", // Take over the entire screen when open
    height: "100%", // Take over the entire screen when open
    backgroundColor: "white", // Background color to distinguish the panel
    fontSize: "20px", // Set the font size to 20px
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  menuItem: {
    textAlign: "right",
  },

  '[data-notification-type="default"]': {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  '[data-notification-type="urgent"]': {
    color: "red",
  },

  ul: {
    padding: 0, // Remove padding for the ul element
    listStyle: "none", // Remove default list styles
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
