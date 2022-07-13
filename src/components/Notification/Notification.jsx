import React from "react";
import './Notification.css';

const Notification = ({ title, msg, bgColor }) => {
    return(
        <div className={`notification-container notification-${bgColor}`}  >
            <h1>{title}</h1>
            <p>{msg}</p>
        </div>
    )
}


export default Notification; 