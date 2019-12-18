import React from 'react';
import { history, Role } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import ItemSidebar from './ItemSidebar'
import SubItemSidebar from './SubItemSidebar'
import SubSubItemSidebar from './SubSubItemSidebar'
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAdmin: false,
            isClient: false,
            isLeader: false,
            isStudent: false,
            isSupervisor: false,
            selectedFile: null 
        };
    };


    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin,
            isClient: x && x.role === Role.Client,
            isLeader: x && x.role === Role.Leader,
            isStudent: x && x.role === Role.Student,
            isSupervisor: x && x.role === Role.Supervisor
        }));
    }
    render() {
      
    const { currentUser, isAdmin, isClient, isLeader, isStudent, isSupervisor } = this.state;
    const projectsSupervisorItems =[{
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
				{title:'Prześlij raport',link:"/sendraport"}
			]
          }
          ,{
            title:'Zapisz się',
            arrow:'113px',
            subtitle:[
				{title:'Zapisz sie do projektu', link:"/signup"},
				{title:'Przypisz do projektu',link:"#"}
			]
          }]

    const usersSupervisorItems=[{
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
	  
    const projectsStudentItems =[{
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
				{title:'Prześlij raport',link:"/sendraport"}
			]
          }
          ,{
            title:'Zapisz się',
            arrow:'113px',
            subtitle:[
				{title:'Zapisz się do projektu', link:"/signup"}
			]
          }]
    const usersStudentItems=[{
          title:'Opiekunowie',
		  link:'/curators',
          arrow:'114px',
          subtitle:[],
          }
        ,{
          title:'Studenci',
		  link:'/students',
          arrow:'280px',
          subtitle:[],
        }
      ]  
      
    const usersLeaderItems=[{
          title:'Opiekunowie',
		  link:'/curators',
          arrow:'114px',
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
                    {currentUser &&
				  <ul className="list-group flex-column d-inline-block first-menu">
					{isClient && <ItemSidebar style="fas fa-project-diagram" link='/createproject' header='Stwórz projekt'/>}
					{isClient && <ItemSidebar style="fas fa-address-book" link='/curators' header='Opiekunowie'/>}
					{isSupervisor && <SubSubItemSidebar style="fas fa-project-diagram" items={projectsSupervisorItems} header='Projekty'/>}
					{isSupervisor && <SubItemSidebar style="fas fa-address-book" items={usersSupervisorItems} header='Użytkownicy'/>}
					{isStudent && <SubSubItemSidebar style="fas fa-project-diagram" items={projectsStudentItems} header='Projekty'/>}
					{isStudent && <SubItemSidebar style="fas fa-address-book" items={usersStudentItems} header='Użytkownicy'/>}
					{isLeader && <SubSubItemSidebar style="fas fa-project-diagram" items={projectsStudentItems} header='Projekty'/>}
					{isLeader && <SubItemSidebar style="fas fa-address-book" items={usersLeaderItems} header='Użytkownicy'/>}
					{/*<ItemSidebar style="fas fa-chart-pie" link='#' header='Statystyka'/>
					<ItemSidebar style="fas fa-calendar" link='#' header='Harmonogram'/>
					<ItemSidebar style="fas fa-search" link='#' header='Szukaj'/> */}
				  </ul>
					}
				</div>
			  </div>
        );
    }
}

export { Sidebar };