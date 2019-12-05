import React from 'react'
import DropdownItem from './DropdownItem'

const DropdownList = (props) => props.list.map((item) => <DropdownItem action={item.action} name={item.name}/>);

export default DropdownList;