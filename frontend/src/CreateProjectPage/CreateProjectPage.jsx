import React from 'react';
import { projectService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class CreateProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: null,
            project:{
                supervisor:"",
                manager:'',
                description:"",
                key:"",
                users:[],
                type:"",
            }
           
        };
    }

    componentDidMount() {
        projectService.getAllProjects().then(students =>{console.log(students);return this.setState({ students })});
    }
    render() {
        const { students } = this.state;
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
                                                  type:event.target.value  
                                              }
                                          }))}/>
                                         
                                         <button type="button" onClick={()=>projectService.addProjects(this.state.project).catch(err=>err)} className="btn btn-success btn-block">Stwórz</button> 
       
                                         {students && students.map(user =>
										<tr key={user.id}><td>{user.id}</td></tr>
										)}
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