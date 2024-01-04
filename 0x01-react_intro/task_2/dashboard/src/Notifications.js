import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.svg';

const Notifications = ()=> {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li>New resume available</li>
                <li><strong>Urgent requirement</strong> - complete by EOD</li>
            </ul>
            <button aria-label='Close' style={{position: 'absolute', top: '10px', right: '5px', border: 'none', background: 'none'}}><img src={closeIcon} alt="close icon"/></button>
        </div>
    );
}

export default Notifications;
