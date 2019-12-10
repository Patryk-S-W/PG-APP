import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history, Role } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { AdminPage } from '@/AdminPage';
import { LoginPage } from '@/LoginPage';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

import axios from 'axios';
import config from 'config';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false,
            isClient: false,
            isCoordinator: false,
            isStudent: false,
            isSupervisor: false,
            selectedFile: null 
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin,
            isClient: x && x.role === Role.Client,
            isCoordinator: x && x.role === Role.Coordinator,
            isStudent: x && x.role === Role.Student,
            isSupervisor: x && x.role === Role.Supervisor
        }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }
    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post(`${config.apiUrl}/uploadRaports`, data, {
       })
     .then(res => {
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
        const { currentUser, isAdmin, isClient, isCoordinator, isStudent, isSupervisor } = this.state;
        return (
            <Router history={history}>
                <div>
                <Navbar />
					<Sidebar />
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div className="vu-content">
						<div className="container-fluid">
							<div className="jumbotron">
								<div className="container">
									<div className="row">
										<div className="col-md-6 offset-md-3">
											<PrivateRoute exact path="/" component={HomePage} />
											<PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
											<Route path="/login" component={LoginPage} />
										</div>
									</div>
								</div>
							</div>
						</div>
                    </div>
                    
                <input type="file" name="file" onChange={this.onChangeHandler}/>    
                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
                    
                </div>
            </Router>
        );
    }
}

export { App }; 