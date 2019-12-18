import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class ClientsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: null
        };
    }

    componentDidMount() {
        userService.getUserByRole('Client').then(clients => this.setState({ clients }));
    }

    render() {
        const { clients } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid column-flex">
						<div className="vu-box">
							<div>
								<h1>Wszyscy klienci</h1>
								<div>
								{clients &&
									<table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
									</thead>
									<tbody>
										{clients.map(user =>
										<tr key={user.uid}><td>{user.uid}</td><td>{user.firstname}</td><td>{user.lastname}</td><td>{user.company}</td><td>{user.email}</td><td>{user.phone}</td></tr>
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

export { ClientsPage };