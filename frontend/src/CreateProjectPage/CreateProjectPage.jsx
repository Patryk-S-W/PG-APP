import React from 'react';
import { projectService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class CreateProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects:[],
            project:{
                id:null,
                supervisor:"",
                manager:'',
                description:"",
                key:"",
                raports:'',
                users:[],
                type:"",
            }
           
        };
    }

    componentDidMount() {
        projectService.getAllProjects()
        .then(projects =>{this.setState({ projects}); return projects.length+1})
        .then(nextID=>this.setState(prevState => ({
            project: {                   
                ...prevState.project,    
                id:nextID 
            }
        })))      
    }
    render() {
        const { projects } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
					
                        <div className="vu-box">
                        <div>
								<h1>Stwórz projekt</h1>
								<div>
                                <h4 className="hheader">Wybierz Opiekuna</h4>
						        <textarea  rows="1"  cols="50" onChange={() =>
                                          this.setState(prevState => ({
                                              project: {                   
                                                  ...prevState.project,    
                                                  supervisor:event.target.value  
                                              }
                                          }))}/> 
                                 <h4 className="hheader">Wybierz Kierownika</h4>
						        <textarea  rows="1"  cols="50" onChange={() =>
                                          this.setState(prevState => ({
                                              project: {                   
                                                  ...prevState.project,    
                                                  manager:event.target.value  
                                              }
                                          }))}/> 
                                 <h4 className="hheader">Wybierz Klucz</h4>
						        <textarea  rows="1"  cols="50" onChange={() =>
                                          this.setState(prevState => ({
                                              project: {                   
                                                  ...prevState.project,    
                                                  key:event.target.value  
                                              }
                                          }))}/>
                                 <h4 className="hheader">Wybierz Typ</h4>
						        <textarea  rows="1"  cols="50" onChange={() =>
                                          this.setState(prevState => ({
                                              project: {                   
                                                  ...prevState.project,    
                                                  type:event.target.value  
                                              }
                                          }))}/>
                                <h4 className="hheader">Wybierz Opis</h4>
						        <textarea  rows="3"  cols="50" onChange={() =>
                                          this.setState(prevState => ({
                                              project: {                   
                                                  ...prevState.project,    
                                                  description:event.target.value  
                                              }
                                          }))}/>
                                         
                                         <button type="button" onClick={()=>{
                                             projectService.addProject(this.state.project)
                                             .then(project=> projectService.getAllProjects().then(projects =>console.log(projects)))
                                             .catch(err=>alert("Wystąpił błąd przy dodawaniu projektu"))}}
                                              className="btn btn-success btn-block">Stwórz</button> 
       

                              </div>       
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export { CreateProjectPage };