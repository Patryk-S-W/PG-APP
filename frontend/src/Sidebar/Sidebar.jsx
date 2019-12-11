import React from 'react';
import ItemSidebar from './ItemSidebar'
import SubItemSidebar from './SubItemSidebar'
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
				{title:"Moje projekty",link:"/myprojects"},
				{title:"Wszystkie projekty",link:"/projects"}
			],
          }
          ,{
            title:'Zarządzanie projektami',
            arrow:'113px',
            subtitle:[
				{title:'Stwórz projekt', link:"/createproject"},
				{title:'Prześlij raport',link:"/sendraport"},
				{title:'Tworzenie harmonogramu',link:"/createcalendar"},
				{title:'Przejrzyj progress',link:"/checkprogress"}
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
		  link:'/users',
          arrow:'',
          subtitle:[],
          }
        ,{
          title:'Opiekunowie',
		  link:'/curators',
          arrow:'114px',
          subtitle:[],
          }
        ,{
          title:'Zleceniodawcy',
		  link:'/clients',
          arrow:'166px',
          subtitle:[],
          }
        ,{
          title:'Kierownicy',
		  link:'/leaders',
          arrow:'220px',
          subtitle:[],
        }
        ,{
          title:'Studenci',
		  link:'/students',
          arrow:'280px',
          subtitle:[],
        }
      ]  
      
        return (
			  <div data-component="sidebar">
				<div className="sidebar">
				  <ul className="list-group flex-column d-inline-block first-menu">
				   <SubSubItemSidebar style="fas fa-project-diagram" items={projectsItems} header='Projekty'/>
				   <SubItemSidebar style="fas fa-address-book" items={usersItems} header='Użytkownicy'/>
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