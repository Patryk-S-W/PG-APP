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
        userService.getUserByRole('Leader').then(leaders => this.setState({ leaders }));
    }

    render() {
        const { leaders } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid column-flex">
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
										{leaders.map(user =>
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

export { LeadersPage };