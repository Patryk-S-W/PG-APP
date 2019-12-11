import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class MyProjectsPage extends React.Component {
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
										<tr className="vu-center"><th>ID</th><th>Opiekun</th><th>Typ</th><th>Klucz</th><th>Kierownik</th><th>Opis</th></tr>
									</thead>
									<tbody>
										{/*students.map(user =>
										<tr key={user.id}><td>{user.id}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
										)*/}
										<tr><td>4</td><td>Katarzyna K.</td><td>Fizyka</td><td>!dB4w</td><td>Anastazy</td><td>Badanie przyciagania ziemskiego czujnikiem w smartfonie</td><td><a href="/sendraport">Prześlij raport</a></td></tr>
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

export { MyProjectsPage };