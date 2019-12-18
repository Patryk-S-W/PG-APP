import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class StudentsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: null
        };
    }

    componentDidMount() {
        userService.getUserByRole('Student').then(students => this.setState({ students }));
    }

    render() {
        const { students } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid column-flex">
						<div className="vu-box">
							<div>
								<h1>Wszyscy studenci</h1>
								<div>
								{students &&
									<table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
									</thead>
									<tbody>
										{students.map(user =>
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

export { StudentsPage };