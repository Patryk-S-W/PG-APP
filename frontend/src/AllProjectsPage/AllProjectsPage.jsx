import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class AllProjectsPage extends React.Component {
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
								<h1>Wszystkie projekty</h1>
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
										<tr><td>1</td><td>Ewa E.</td><td>Chemia, Biologia</td><td>6hU2@</td><td>Anastazy</td><td>Modelling charge transfer processes in C 2+ –tetrahydrofuran collision for ion-induced radiation damage in DNA building blocks</td></tr>
										<tr><td>2</td><td>Norbert D.</td><td>Elektronika</td><td>5Y8k$</td><td>Anastazy</td><td>Dron spadający</td></tr>
										<tr><td>3</td><td>Beata Ż.</td><td>Elektronika</td><td>2Hm^i</td><td>Anastazy</td><td>Czołg latający</td></tr>
										<tr><td>4</td><td>Katarzyna K.</td><td>Fizyka</td><td>!dB4w</td><td>Anastazy</td><td>Badanie przyciagania ziemskiego czujnikiem w smartfonie</td></tr>
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

export { AllProjectsPage };