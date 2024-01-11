import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Notifcations/Notifications.css';
import closeIcon from '../assets/close-icon.svg';
import { getLatestNotification } from '../Utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  renderNotificationItems() {
    const { listNotifications } = this.props;
    if (listNotifications.length === 0) {
      return <NotificationItem type="default" value="No new notification for now" />;
    } else {
      return listNotifications.map(notification => (
        <NotificationItem
          key={notification.id}
          markAsRead={this.markAsRead}
          {...notification}
        />
      ));
    }
  }

  render() {
    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>{this.renderNotificationItems()}</ul>
        <button
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '10px',
            right: '5px',
            border: 'none',
            background: 'none',
          }}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

