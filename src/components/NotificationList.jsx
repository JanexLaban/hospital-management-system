import React from 'react';

const NotificationList = ({ notifications }) => {
  if (notifications.length === 0) {
    return <p>No notifications at the moment.</p>;
  }

  return (
    <ul>
      {notifications.map((notification) => (
        <li key={notification.id}>
          {notification.message} - <strong>{notification.date}</strong>
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
