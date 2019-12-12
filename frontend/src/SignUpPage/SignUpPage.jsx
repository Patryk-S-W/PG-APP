import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

import axios from 'axios';
import config from 'config';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            name:"",
            surname:"",
            nrA:"",
            info:" ",
            project:"",
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
    }
    SignUp=()=>{
      if(this.state.name!="" && this.state.surname!=""  && this.state.nrA!="" && this.state.project!=""  )
      this.setState({info :`Zapisano ${this.state.name}  do projektu : ${this.state.project}`}); 
    }
   
    render() {
        const { currentUser, userFromApi } = this.state;
       
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
				  <div className="container-fluid column-flex">
						<h1 className="hheader">Zapisz się do projektu</h1>
            
          	<div>
            <h3 className="hheader">Projekty</h3>
            <table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Opiekun</th><th>Typ</th><th>Klucz</th><th>Kierownik</th><th>Opis</th><th> </th></tr>
									</thead>
									<tbody>
										{/*students.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
										)*/}
										<tr><td>1</td><td>Ewa E.</td><td>Chemia, Biologia</td><td>6hU2@</td><td>Anastazy</td><td>Modelling charge transfer processes in C 2+ –tetrahydrofuran collision for ion-induced radiation damage in DNA building blocks</td><td>
						<button type="button" onClick={()=> this.setState({
        project:" Modelling charge transfer processes in C 2+ –tetrahydrofuran collision for ion-induced radiation damage in DNA building blocks"
      })} className="btn btn-success btn-block">Wybierz</button> 
           </td></tr>
										<tr><td>2</td><td>Norbert D.</td><td>Elektronika</td><td>5Y8k$</td><td>Anastazy</td><td>Dron spadający</td><td>
						<button type="button" onClick={()=>this.setState({project:"Dron spadający"})} className="btn btn-success btn-block">Wybierz</button> 
           </td></tr>
										<tr><td>3</td><td>Beata Ż.</td><td>Elektronika</td><td>2Hm^i</td><td>Anastazy</td><td>Czołg latający</td><td>
						<button type="button" onClick={()=>this.setState({project:"Czołg latający"})} className="btn btn-success btn-block">Wybierz</button> 
           </td></tr>
										<tr><td>4</td><td>Katarzyna K.</td><td>Fizyka</td><td>!dB4w</td><td>Anastazy</td><td>Badanie przyciagania ziemskiego czujnikiem w smartfonie</td><td>
						<button type="button" onClick={()=>this.setState({project:"Badanie przyciagania ziemskiego czujnikiem w smartfonie"})} className="btn btn-success btn-block">Wybierz</button> 
           </td></tr>
									</tbody>
									</table>
            </div>
            <h5>{this.state.info}</h5>
					<div className="upload-box">
						<h3 className="hheader">Dane osobowe</h3>
						<textarea  rows="1"  cols="50" placeholder={"Imię"} onChange={this.handleChangeName}/>    
						<textarea  rows="1"  cols="50" placeholder={"Nazwisko"} onChange={this.handleChangeSurname}/>
           
            <h4 className="hheader">Numer Albumu</h4>
						<textarea  rows="1"  cols="50" onChange={this.handleChangeNrA}/> 
            
						<button type="button" onClick={this.SignUp} className="btn btn-success btn-block">Zapisz się</button> 
       
        	</div>
         
				  </div>
				</div>
            </div>
        );
    }
}

export { SignUpPage };