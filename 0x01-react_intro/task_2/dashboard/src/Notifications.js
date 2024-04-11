import React from 'react';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <button
	style="{{ float: 'right' }}
	aria-label="Close"
	onClick={handleClick} >
      <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
	<li data-priority="default">New course available</li>
	<li data-priority="default">New resume available</li>
	<li dangerouslySetInnerHTML={{ __html:getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
