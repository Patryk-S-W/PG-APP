import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history, Role } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { AdminPage } from '@/AdminPage';
import { LoginPage } from '@/LoginPage';
import { RegisterPage } from '@/RegisterPage';
import { UsersPage } from '@/UsersPage';

import axios from 'axios';
import config from 'config';

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
				<PrivateRoute path="/users" component={UsersPage} />
				<PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
				<Route path="/login" component={LoginPage} />
			</section>
            </Router>
        );
    }
}

export { App }; 