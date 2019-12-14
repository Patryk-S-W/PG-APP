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
        userService.getAllStudents().then(students => this.setState({ students }));
    }

    render() {
        const { students } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
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
										{/*students.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
										)*/}
										<tr><td>1</td><td>Jakiś</td><td>User</td><td>XXX</td><td>1@1.pl</td><td>888777666</td></tr><tr><td>2</td><td>Jakiś</td><td>User</td><td>XXX</td><td>1@2.pl</td><td>888777666</td></tr><tr><td>6</td><td>Anastazy</td><td>Wiśniewski</td><td>XXX</td><td>1@1.pl</td><td>888777666</td></tr><tr><td>7</td><td>Agata</td><td>Wicikowska</td><td>ZZZ</td><td>1@ggg.pl</td><td>888777666</td></tr><tr><td>8</td><td>Rafał</td><td>Klifeld</td><td>XXX</td><td>agatawicikowska@gmail.com</td><td>888777666</td></tr><tr><td>9</td><td>Radek</td><td>Rudziewicz</td><td>XXX</td><td>1@1.pl</td><td>888777666</td></tr><tr><td>10</td><td>Patryk</td><td>Sadowski</td><td>AAA</td><td>patryk@patryksadowski.pl</td><td>888888888</td></tr>
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