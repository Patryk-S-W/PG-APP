import React from 'react'

const NotificationItem = (props) => { return(
  <a href={props.action} className="list-group-item list-group-item-action flex-column align-items-start">
    <h5 className="mb-1">{props.text}</h5>
    <p className="mb-0">{props.time}</p>
  </a>
 );};

export default NotificationItem;