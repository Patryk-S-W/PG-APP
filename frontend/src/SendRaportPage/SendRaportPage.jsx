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
        axios.post(`${config.apiUrl}/uploads`, data, { 
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
						<div className="vu-box">
						<h1 className="hheader">student project4</h1>
						<table className="lessons-table">
							<tbody>
							<tr><th>Opiekun:</th><td>opiekun</td></tr>
							<tr><th>Klucz:</th><td>!h%6r</td></tr>
							<tr><th>Kierownik:</th><td>kierownik</td></tr>
							<tr><th>Data rozpoczecia:</th><td>2019-09-07 19:10:25</td></tr>
							<tr><th>Data zakończenia:</th><td>2019-09-07 19:10:25</td></tr>
							<tr><th>Członkowie:</th><td><li>kierownik</li><li>user</li><li>student2</li></td></tr>
							<tr><th>Opis:</th><td>test description</td></tr>
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
            </div>
        );
    }
}

export { SendRaportPage };