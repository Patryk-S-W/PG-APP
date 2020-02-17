import React from 'react';
import { projectService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

import { keyGenerator } from '@/_helpers';

import { FormGroup, Form, Button, Label, Input, FormText, Col, Container, Row } from 'reactstrap';
import Center from 'react-center';
class CreateProjectPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [],
			project: {
				id: null,
				supervisor: '',
				manager: '',
				description: '',
				key: '',
				raports: '',
				users: [],
				type: ''
			}
		};
	}

	componentDidMount() {
		projectService
			.getAllProjects()
			.then((projects) => {
				this.setState({ projects });
				return projects.length + 1;
			})
			.then((nextID) =>
				this.setState((prevState) => ({
					project: {
						...prevState.project,
						id: nextID
					}
				}))
			);
	}
	render() {
		const { projects } = this.state;
		const keyLength = 15;
		return (
			<div>
				<Sidebar />
				<Navbar />
				<Container>
					<div className="vu-content">
						<Container fluid>
							<div className="vu-box">
								<Container>
									<h1 style={{ marginBottom: '25px' }}>Stwórz projekt</h1>
								</Container>
								<Container>
									<Form>
										<FormGroup row>
											<Col sm="2">
												<Label for="exampleSelect">Opiekun</Label>
											</Col>
											<Col sm="10">
												<Input
													type="select"
													name="select"
													id="exampleSelect"
													onChange={() =>
														this.setState((prevState) => ({
															project: {
																...prevState.project,
																supervisor: event.target.value
															}
														}))}
												>
													{[
														'wybierz',
														'opiekun 1 opiekun 1',
														'opiekun 2',
														'opiekun 3',
														'opiekun 4'
													].map((item) => <option>{item}</option>)}
												</Input>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col sm="2">
												<Label for="exampleSelect">Kierownik</Label>
											</Col>
											<Col sm="10">
												<Input
													type="select"
													name="select"
													id="exampleSelect"
													onChange={() =>
														this.setState((prevState) => ({
															project: {
																...prevState.project,
																manager: event.target.value
															}
														}))}
												>
													{[
														'wybierz',
														'kierownik 1',
														'kierownik 2',
														'kierownik 3',
														'kierownik 4'
													].map((item) => <option>{item}</option>)}
												</Input>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col sm="2">
												<Label for="exampleSelect">Typ</Label>
											</Col>
											<Col sm="10">
												<Input
													type="select"
													name="select"
													id="exampleSelect"
													onChange={() =>
														this.setState((prevState) => ({
															project: {
																...prevState.project,
																type: event.target.value
															}
														}))}
												>
													{[ 'wybierz', 'typ 1', 'typ 2', 'typ 3', 'typ 4' ].map((item) => (
														<option>{item}</option>
													))}
												</Input>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col sm="2">
												<Label for="key">Klucz</Label>
											</Col>
											<Col sm="10">
												<Input
													placeholder={keyGenerator(keyLength)}
													value={keyGenerator(keyLength)}
													onChange={() =>
														this.setState((prevState) => ({
															project: {
																...prevState.project,
																key: event.target.value
															}
														}))}
												/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col sm="2">
												<Label for="exampleText">Opis</Label>
											</Col>
											<Col sm="10">
												<Input
													type="textarea"
													onChange={() =>
														this.setState((prevState) => ({
															project: {
																...prevState.project,
																description: event.target.value
															}
														}))}
												/>
											</Col>
										</FormGroup>
										<FormGroup row check>
											<Center>
												<Button
													type="button"
													color="success"
													onClick={() => {
														projectService
															.addProject(this.state.project)
															.then((project) =>
																projectService
																	.getAllProjects()
																	.then((projects) => console.log(projects))
															)
															.catch((err) =>
																alert('Wystąpił błąd przy dodawaniu projektu')
															);
													}}
												>
													Stwórz
												</Button>
											</Center>
										</FormGroup>
									</Form>
								</Container>
							</div>
						</Container>
					</div>
				</Container>
			</div>
		);
	}
}

export { CreateProjectPage };
