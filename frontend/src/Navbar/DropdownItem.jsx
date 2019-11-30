import React from 'react'

const DropdownItem = (props) => <a className="dropdown-item px-2" href={props.action}>{props.name}</a>;

export default DropdownItem;