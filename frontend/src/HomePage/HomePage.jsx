import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
				  <div className="container-fluid">
					<div className="vu-boxes">
					  <div>
						<h6>Ostatnio edytowane projekty</h6>
						<table className="lessons-table">
						  <tbody><tr>
							  <th width={40} title="Oznacz projekt"><i className="fas fa-sort mr-1 float-left" />T</th>
							  <th width={120} title="Ostatni edytor"><i className="fas fa-sort mr-1 float-left" />Ost. edytor</th>
							  <th width={70} title="Typ projektu"><i className="fas fa-sort mr-1 float-left" />Typ</th>
							  <th width={60} title="Identyfikator projektu"><i className="fas fa-sort mr-1 float-left" />Klucz</th>
							  <th width={100} title="Opis"><i className="fas fa-sort mr-1 float-left" />Opis</th>
							  <th width={40} title="Priorytet"><i className="fas fa-sort mr-1 float-left" />P</th>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Mariusz K.</td>
							  <td>Web</td>
							  <td>7^JnW</td>
							  <td title="Strona do otrzymywania danych pogodowych z Marsa">Strona do otrzymywania danych p...</td>
							  <td>3</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Dariusz F.</td>
							  <td>Web</td>
							  <td>3^gXw</td>
							  <td title="Strona do otrzymywania danych z wnętrza lewej komory sercowej">Strona do otrzymywania danych z wn...</td>
							  <td>4</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Katarzyna G.</td>
							  <td>Chemia</td>
							  <td>H3s@w</td>
							  <td>Otrzymywanie kryształu SO4</td>
							  <td>2</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Beata K.</td>
							  <td>Elektronika</td>
							  <td>1Ymj$</td>
							  <td>Robot sprzątajacy</td>
							  <td>2</td>
							</tr>
						  </tbody></table>
					  </div>
					  <div>
						<h6>Ostatnio zlecone projekty</h6>
						<table className="lessons-table">
						  <tbody><tr>
							  <th width={40} title="Oznacz projekt"><i className="fas fa-sort mr-1 float-left" />T</th>
							  <th width={120} title="Ostatni zleceniodawca"><i className="fas fa-sort mr-1 float-left" />Ost. zlecen.</th>
							  <th width={70} title="Typ projektu"><i className="fas fa-sort mr-1 float-left" />Typ</th>
							  <th width={60} title="Identyfikator projektu"><i className="fas fa-sort mr-1 float-left" />Klucz</th>
							  <th width={100} title="Opis"><i className="fas fa-sort mr-1 float-left" />Opis</th>
							  <th width={40} title="Priorytet"><i className="fas fa-sort mr-1 float-left" />P</th>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Katarzyna K.</td>
							  <td>Fizyka</td>
							  <td>!dB4w</td>
							  <td title="Badanie przyciagania ziemskiego czujnikiem w smartfonie">Badanie przyciagania ziemskiego cz...</td>
							  <td>4</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Beata Ż.</td>
							  <td>Elektronika</td>
							  <td>2Hm^i</td>
							  <td>Czołg latający</td>
							  <td>2</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Norbert D.</td>
							  <td>Elektronika</td>
							  <td>5Y8k$</td>
							  <td>Dron spadający</td>
							  <td>2</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Ewa E.</td>
							  <td title="Chemia, Biologia">Chemia, Bio...</td>
							  <td>6hU2@</td>
							  <td title="Modelling charge transfer processes in C 2+ –tetrahydrofuran collision for ion-induced radiation damage in DNA building blocks">Modelling charge trans...</td>
							  <td>1</td>
							</tr>
						  </tbody></table>
					  </div>
					  <div>
						<h6>Lista przedmiotów</h6>
						<table className="lessons-table">
						  <tbody><tr>
							  <th width={40} title="Oznacz przedmiot"><i className="fas fa-sort mr-1 float-left" />T</th>
							  <th width={110} title="Nazwa"><i className="fas fa-sort mr-1 float-left" />Nazwa</th>
							  <th width={120} title="Ilość projektów"><i className="fas fa-sort mr-1 float-left" />Il. projektów</th>
							  <th width={120} title="Ilość studentów"><i className="fas fa-sort mr-1 float-left" />Il. studentów</th>
							  <th width={40} title="Priorytet"><i className="fas fa-sort mr-1 float-left" />P</th>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Biofizyka</td>
							  <td>1</td>
							  <td>0</td>
							  <td>1</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Bioinformatyka</td>
							  <td>999+</td>
							  <td>1</td>
							  <td>4</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Inżynieria oprogramowania</td>
							  <td>11</td>
							  <td>34</td>
							  <td>2</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Inżynieria tkankowa</td>
							  <td>20</td>
							  <td>62</td>
							  <td>3</td>
							</tr>
							<tr>
							  <td><input type="checkbox" /></td>
							  <td>Inżynieria inżynierowania</td>
							  <td>6</td>
							  <td>6</td>
							  <td>2</td>
							</tr>
						  </tbody></table>
					  </div>
					</div>
				  </div>
				</div>
            </div>
        );
    }
}

export { HomePage };