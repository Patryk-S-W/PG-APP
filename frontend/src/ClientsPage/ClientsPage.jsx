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
        userService.getAllClients().then(clients => this.setState({ clients }));
    }

    render() {
        const { clients } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
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
										{/*clients.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
										)*/}
										<tr><td>5</td><td>Jakiś</td><td>Klient</td><td>XXX</td><td>1@1.com</td><td>888777666</td></tr>
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