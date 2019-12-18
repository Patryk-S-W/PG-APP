import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const items=this.props.itemslist;
        return (     
            items.map((item)=>{
                  return(            
                    <li key={item.title} className="list-group-item pl-4">
                      <a href={item.link} >{item.title}</a>
                    </li>
              )
            })     
        )
  }
}
export default class ItemSidebar extends React.Component {
  constructor(props) {
      super(props);
  }
 
  render() {
    const items = this.props.items;
    const header = this.props.header;
    const link = this.props.link;
      return (
          <li className="list-group-item pl-3 py-2">
          <a href={link}><i className={this.props.style} aria-hidden="true"><span className="ml-2 align-middle">{header}</span></i></a>
        </li>
      );
  }
}