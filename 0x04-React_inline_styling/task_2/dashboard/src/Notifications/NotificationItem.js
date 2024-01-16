import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  defaultNotification: {
    color: '#000',
    cursor: 'pointer',
  },
  urgentNotification: {
    color: '#ff0000',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
});

const NotificationItem = React.memo(({ id, type, html, value, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <>
      {type && value ? (
        <li
          className={css(type === 'urgent' ? styles.urgentNotification : styles.defaultNotification)}
          data-notification-type={type}
          onClick={handleClick}
        >
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          className={css(styles.urgentNotification)}
          data-urgent
          dangerouslySetInnerHTML={{ __html: html }}
          onClick={handleClick}
        ></li>
      ) : null}
    </>
  );
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
