import React from 'react';
import Moment from 'react-moment';

import { projectService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class MyProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: null
        };
    }

    componentDidMount() {
        projectService.getAllMyProjects().then(projects => this.setState({ projects }));
    }

    render() {
        const { projects } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
					<div className="container-fluid">
						<div className="vu-box">
							<div>
								<h1>Moje projekty</h1>
								<div>
								{projects &&
									<table className="lessons-table">
									<thead>
										<tr className="vu-center"><th>ID</th><th>Tytul</th><th>Rozpoczęcie</th><th>Zakończenie</th><th>Opiekun</th><th>Kierownik</th><th>Klucz</th><th>Członkowie</th></tr>
									</thead>
									<tbody>
										{projects.map(project =>
						    				<tr key={project.prid}><td>{project.prid}</td><td>{project.title}</td><td><Moment format="YYYY/MM/DD HH:mm">{project.start_time}</Moment></td><td><Moment format="YYYY/MM/DD HH:mm">{project.end_time}</Moment></td><td>{project.supervisor}</td><td>{project.leader}</td><td>{project.pkey}</td><td>{project.members.map(member => <li>{member}</li>)}</td></tr>
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

export { MyProjectsPage };