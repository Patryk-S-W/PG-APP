import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class CuratorsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curators: null
        };
    }

    componentDidMount() {
        userService.getAllCurators().then(curators => this.setState({ curators }));
    }

    render() {
        const { curators } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
						<div className="vu-box">
							<div>
								<h1>Wszyscy opiekunowie</h1>
								<div>
								{curators &&
									<table className="lessons-table">
										<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
										{/*curators.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
										)*/}
										<tr><td>3</td><td>Jakiś</td><td>Opiekun</td><td>YYY</td><td>1@1.pl</td><td>888777666</td></tr>
										<tr><td>6</td><td>Anastazy</td><td>Wiśniewski</td><td>XXX</td><td>1@1.pl</td><td>888777666</td></tr>
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

export { CuratorsPage };