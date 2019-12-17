import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class AllUsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { users } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
						<div className="vu-box">
							<div>
								<h1>Wszyscy użytkownicy</h1>
								<div>
								{users &&
									<table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
									</thead>
									<tbody>
										{users.map(user =>
										<tr key={user.uid}><td>{user.uid}</td><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.company}</td><td>{user.email}</td><td>{user.phone}</td></tr>
										)}
									</tbody>
									</table>
								}
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export { AllUsersPage };