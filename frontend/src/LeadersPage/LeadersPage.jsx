import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class LeadersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaders: null
        };
    }

    componentDidMount() {
        userService.getAllLeaders().then(leaders => this.setState({ leaders }));
    }

    render() {
        const { leaders } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
						<div className="vu-box">
							<div>
								<h1>Wszyscy kierownicy</h1>
								<div>
								{leaders &&
									<table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
									</thead>
									<tbody>
										{/*leaders.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
										)*/}
										<tr><td>4</td><td>Jakiś</td><td>Kierownik</td><td>XXX</td><td>1@1.pl</td><td>888777666</td></tr>
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

export { LeadersPage };