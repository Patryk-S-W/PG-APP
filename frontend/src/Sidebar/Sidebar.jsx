import React from 'react';
import ItemSidebar from './ItemSidebar'
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      
    const diagramItems =[{
            title:'Raport',
            arrow:'',
            subtitle:[{title:"Uwórz raport",link:"raport.html"},{title:"Test",link:"#"}],
          }
          ,{
            title:'Test',
            arrow:'113px',
            subtitle:[{title:'Test', link:"#"},{title:'Test',link:"#"}]
          }]

    const statystykaItems=[{
          title:'Test',
          arrow:'',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
          }
        ,{
          title:'Test',
          arrow:'114px',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
          }
        ,{
          title:'Test',
          arrow:'166px',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
          }
        ,{
          title:'Test',
          arrow:'220px',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
        }
        ,{
          title:'Test',
          arrow:'272px',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
        }
        ,{
          title:'Test',
          arrow:'323px',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
        }
        ,{
          title:'Test',
          arrow:'377px',
          subtitle:[{title:"Test",link:"#"},{title:"Test",link:"#"}],
        }
      ]  
      
        return (
       
      <div data-component="sidebar">
        <div className="sidebar">
          <ul className="list-group flex-column d-inline-block first-menu">
           <ItemSidebar style="fas fa-project-diagram" items={diagramItems} header='Projekty'/>
           <ItemSidebar style="fas fa-chart-pie" items={statystykaItems} header='Statystyka'/>
           <ItemSidebar style="fas fa-address-book" items={statystykaItems} header='Użytkownicy'/>
           <ItemSidebar style="fas fa-terminal" items={statystykaItems} header='Terminal'/>
           <ItemSidebar style="fas fa-microchip" items={statystykaItems} header='Elektronika'/>
           <ItemSidebar style="fas fa-bath"  items={statystykaItems} header='Prysznic'/>
          </ul>
        </div>
      </div>
        );
    }
}

export { Sidebar };