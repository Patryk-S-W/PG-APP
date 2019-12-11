import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

import axios from 'axios';
import config from 'config';

class SendRaportPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
			selectedFile: null 
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post(`${config.apiUrl}/uploadRaports`, data, { 
           // receive two    parameter endpoint url ,form data
       })
     .then(res => { // then print response status
         console.log(res.statusText)
      })
      .catch(err =>{
        console.log(err)
      })
     }
     onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
        })
        
      }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
				  <div className="container-fluid column-flex">
						<h1 className="hheader">Badanie przyciagania ziemskiego czujnikiem w smartfonie</h1>
						<table className="lessons-table">
							<tbody>
							<tr><th>Opiekun:</th><td>Katarzyna K.</td></tr>
							<tr><th>Typ:</th><td>Fizyka</td></tr>
							<tr><th>Klucz:</th><td>!dB4w</td></tr>
							<tr><th>Kierownik:</th><td>Anastazy</td></tr>
							<tr><th>Opis:</th><td>Badanie przyciagania ziemskiego czujnikiem w smartfonie</td></tr>
							</tbody>
						</table>
					<div className="upload-box">
						<h3 className="hheader">Prześlij raport</h3>
						<input type="file" name="file" onChange={this.onChangeHandler}/>    
						<button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Prześlij raport</button> 
					</div>
					
					<div className="upload-box">
						<h3 className="hheader">Dodaj komentarz</h3>
						<textarea  rows="4"  cols="50"/>    
						<button type="button" className="btn btn-success btn-block">Wyślij</button> 
					</div>
				  </div>
				</div>
            </div>
        );
    }
}

export { SendRaportPage };