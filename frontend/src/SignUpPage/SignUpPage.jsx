import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';
import { projectService } from '@/_services';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[],
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            name:"",
            surname:"",
            nrA:"",
            info:" ",
            selectedProjectId:null,
        };
    }
    handleChangeName=(event)=> {
      this.setState({name: event.target.value});
    }
    handleChangeSurname=(event)=> {
      this.setState({surname: event.target.value});
    }
    handleChangeNrA=(event)=> {
      this.setState({nrA: event.target.value});
    }
    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
        projectService.getAllProjects()
        .then(projects =>this.setState({ projects})); 
      }
    SignUp=()=>{
      if( this.state.selectedProjectId!=null  )
     {
      projectService.addUserToProject(this.state.currentUser,this.state.selectedProjectId)
      .then(()=>this.setState({info :`Zapisano do projektu`}))
      .catch(err=>alert("Wystąpił błąd przy zapisaniu do projektu"))
      ; 
     }   
    }
   
    render() {
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
				  <div className="container-fluid column-flex">
					<div className="vu-box">
						<h1 className="hheader">Zapisz się do projektu</h1>
            
          	<div>
            <h3 className="hheader">Projekty</h3>
            <table className="lessons-table">
									<thead>
										<tr className="vu-center"><th></th><th>Opiekun</th><th>Typ</th><th>Klucz</th><th>Kierownik</th><th>Opis</th><th> </th></tr>
									</thead>
									<tbody>
										{/*students.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
                    )*/
                    this.state.projects.map((project,index)=>
                      <tr><td>{index+1}</td><td>{project.supervisor}</td><td>{project.type}</td><td>{project.key}</td><td>{project.manager}</td><td>{project.description}</td><td>
						<button type="button" onClick={()=> this.setState({
        selectedProjectId:project.id})} className="btn btn-success btn-block">Wybierz</button> 
           </td></tr>
                      )

                    }		
									</tbody>
									</table>
            </div>
            <h5>{this.state.info}</h5>
           
					<div className="upload-box">
             {/*
						<h3 className="hheader">Dane osobowe</h3>
						<textarea  rows="1"  cols="50" placeholder={"Imię"} onChange={this.handleChangeName}/>    
						<textarea  rows="1"  cols="50" placeholder={"Nazwisko"} onChange={this.handleChangeSurname}/>
           
            <h4 className="hheader">Numer Albumu</h4>
						<textarea  rows="1"  cols="50" onChange={this.handleChangeNrA}/> 
            */}
						<button type="button" onClick={this.SignUp} className="btn btn-success btn-block">Zapisz się</button> 
       
        	</div>
         
				  </div>
				  </div>
				</div>
            </div>
        );
    }
}

export { SignUpPage };