import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ id, type, html, value, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <>
      {type && value ? (
        <li data-notification-type={type} onClick={handleClick}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li data-urgent dangerouslySetInnerHTML={{ __html: html }} onClick={handleClick}></li>
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
