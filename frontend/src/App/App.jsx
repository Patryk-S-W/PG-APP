import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history, Role } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { AdminPage } from '@/AdminPage';
import { LoginPage } from '@/LoginPage';
import { RegisterPage } from '@/RegisterPage';
import { AllUsersPage } from '@/AllUsersPage';
import { StudentsPage } from '@/StudentsPage';
import { CuratorsPage } from '@/CuratorsPage';
import { LeadersPage } from '@/LeadersPage';
import { ClientsPage } from '@/ClientsPage';
import { SendRaportPage } from '@/SendRaportPage';
import { MyProjectsPage } from '@/MyProjectsPage';
import { AllProjectsPage } from '@/AllProjectsPage';
import {SignUpPage}  from '@/SignUpPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
			<section className="mainpage">
				<PrivateRoute exact path="/" component={HomePage} />
				<Route path="/register" component={RegisterPage} />
				<PrivateRoute path="/home" component={HomePage} />
				<PrivateRoute path="/signup" component={SignUpPage} />
				<PrivateRoute path="/myprojects" component={MyProjectsPage} />
				<PrivateRoute path="/projects" component={AllProjectsPage} />
				<PrivateRoute path="/users" component={AllUsersPage} />
				<PrivateRoute path="/students" component={StudentsPage} />
				<PrivateRoute path="/curators" component={CuratorsPage} />
				<PrivateRoute path="/leaders" component={LeadersPage} />
				<PrivateRoute path="/clients" component={ClientsPage} />
				<PrivateRoute path="/sendraport" component={SendRaportPage} />
				<PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
				<Route path="/login" component={LoginPage} />
			</section>
            </Router>
        );
    }
}

export { App }; 