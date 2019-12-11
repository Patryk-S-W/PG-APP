import React from 'react'
import DropdownItem from './DropdownItem'

const DropdownList = (props) => props.list.map((item) => <DropdownItem action={item.action} onClick={item.onclick} name={item.name}/>);

export default DropdownList;