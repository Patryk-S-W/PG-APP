import React from 'react';
import Moment from 'react-moment';

import { projectService, userService, authenticationService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null,
            projects: null,
            curators: null,
			students: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
        projectService.getAllProjects().then(projects => this.setState({ projects }));
        userService.getUserByRole('Supervisor').then(curators => this.setState({ curators }));
        userService.getUserByRole('Student').then(students => this.setState({ students }));
    }

    render() {
        const { currentUser, userFromApi, projects, curators, students } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
				  <div className="container-fluid">
					<div className="vu-boxes">
					  <div>
						<h6>Ostatnio dodane projekty</h6>
					    		{projects &&
					    			<table className="lessons-table">
					    			<thead>
					    				<tr className="vu-center"><th>ID</th><th>Tytul</th><th>Rozpoczęcie</th><th>Zakończenie</th><th>Opiekun</th><th>Kierownik</th><th>Klucz</th></tr>
					    			</thead>
					    			<tbody>
						    			{projects.map(project =>
						    				<tr key={project.prid}><td>{project.prid}</td><td>{project.title}</td><td><Moment format="YYYY/MM/DD HH:mm">{project.start_time}</Moment></td><td><Moment format="YYYY/MM/DD HH:mm">{project.end_time}</Moment></td><td>{project.supervisor}</td><td>{project.leader}</td><td>{project.pkey}</td></tr>
						    				)}
					    			</tbody>
					    			</table>
					    		}
					  </div>
					  <div>
						<h6>Lista opiekunów</h6>
								{curators &&
									<table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
									</thead>
									<tbody>
										{curators.map(user =>
										<tr key={user.uid}><td>{user.uid}</td><td>{user.firstname}</td><td>{user.lastname}</td><td>{user.company}</td><td>{user.email}</td><td>{user.phone}</td></tr>
										)}
									</tbody>
									</table>
								}
					  </div>
					  <div>
						<h6>Lista studentów</h6>
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
        );
    }
}

export { HomePage };