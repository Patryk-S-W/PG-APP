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
                      <ul className="list-group flex-column d-inline-block sub-submenu">
                        <span className="arrow" style={{top:item.arrow}}/>
                        {item.subtitle.map((subitem)=>{
                          return(
                            <li key={subitem.title} className="list-group-item pl-4">
                            <a href={subitem.link}>{subitem.title}</a>
                          </li>)
                        })}
                      
                      </ul>
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
    const items =this.props.items;
    const header =this.props.header;
    const link =this.props.link;
		return (
			<li className="list-group-item pl-3 py-2">
			    <a href={link}><i className={this.props.style} aria-hidden="true"><span className="ml-2 align-middle">{header}</span></i></a>
			    <ul className="list-group flex-column d-inline-block submenu">
					{items.map((item)=>{
						return( <ItemList key={item.title} itemslist={[item]}/>)
					})}
			    </ul>
			</li>
		);
    }
}