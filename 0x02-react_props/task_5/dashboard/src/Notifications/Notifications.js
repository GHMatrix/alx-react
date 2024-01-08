import React from 'react';
import '../Notifcations/Notifications.css';
import closeIcon from '../assets/close-icon.svg';
import { getLatestNotification } from '../Utils/utils';
import NotificationItem from './NotificationItem';


function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="default" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
      <button aria-label='Close' style={{ position: 'absolute', top: '10px', right: '5px', border: 'none', background: 'none' }}><img src={closeIcon} alt="close icon" /></button>
    </div>
  );
}
export default Notifications;
