import React from 'react';
import ItemSidebar from './ItemSidebar'
import SubSubItemSidebar from './SubSubItemSidebar'
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      
    const projectsItems =[{
            title:'Lista projektów',
            arrow:'',
            subtitle:[
				{title:"Moje projekty",link:"#"},
				{title:"Wszystkie projekty",link:"#"},
				{title:"Projekty",link:"#"}
			],
          }
          ,{
            title:'Zarządzanie projektami',
            arrow:'113px',
            subtitle:[
				{title:'Stwórz projekt', link:"#"},
				{title:'Generowanie raportów',link:"#"},
				{title:'Tworzenie harmonogramu',link:"#"},
				{title:'Przejrzyj progress',link:"#"}
			]
          }
          ,{
            title:'Zapisz się',
            arrow:'113px',
            subtitle:[
				{title:'Zapisz sie do projektu', link:"#"},
				{title:'Przypisz do projektu',link:"#"}
			]
          }]

    const usersItems=[{
          title:'Wszyscy użytkownicy',
          arrow:'',
          subtitle:[],
          }
        ,{
          title:'Opiekunowie',
          arrow:'114px',
          subtitle:[],
          }
        ,{
          title:'Zleceniodawcy',
          arrow:'166px',
          subtitle:[],
          }
        ,{
          title:'Studenci',
          arrow:'220px',
          subtitle:[],
        }
      ]  
      
        return (
			  <div data-component="sidebar">
				<div className="sidebar">
				  <ul className="list-group flex-column d-inline-block first-menu">
				   <SubSubItemSidebar style="fas fa-project-diagram" items={projectsItems} header='Projekty'/>
				   <SubSubItemSidebar style="fas fa-address-book" items={usersItems} header='Użytkownicy'/>
				   {/*<ItemSidebar style="fas fa-chart-pie" link='#' header='Statystyka'/>
				   <ItemSidebar style="fas fa-calendar" link='#' header='Harmonogram'/>
				   <ItemSidebar style="fas fa-search" link='#' header='Szukaj'/> */}
				  </ul>
				</div>
			  </div>
        );
    }
}

export { Sidebar };