import React from 'react';
import '../Notifcations/Notifications.css';
import closeIcon from '../assets/close-icon.svg';
import { getLatestNotification } from '../Utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ listNotifications }) {
  const renderNotificationItems = () => {
    if (listNotifications.length === 0) {
      return <NotificationItem type="default" value="No new notification for now" />;
    } else {
      return listNotifications.map(notification => (
        <NotificationItem key={notification.id} {...notification} />
      ));
    }
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {renderNotificationItems()}
      </ul>
      <button aria-label='Close' style={{ position: 'absolute', top: '10px', right: '5px', border: 'none', background: 'none' }}><img src={closeIcon} alt="close icon" /></button>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
