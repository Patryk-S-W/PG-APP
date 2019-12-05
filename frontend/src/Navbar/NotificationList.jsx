import React from 'react'
import NotificationItem from './NotificationItem'

const NotificationList = (props) => props.list.map((item)=><NotificationItem action={item.action} text={item.text} time={item.time}/>);

export default NotificationList;
