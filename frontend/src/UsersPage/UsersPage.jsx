import React from 'react';

import { userService } from '@/_services';
import { Sidebar } from '@/Sidebar';
import { Navbar } from '@/Navbar';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { users } = this.state;
        return (
            <div>
				<Sidebar />
				<Navbar />
				<div className="vu-content">
  <div className="container-fluid">
    <div className="vu-box">
      <div>
                <h1>Wszyscy użytkownicy</h1>
                <div>
                    {users &&
                        <table className="lessons-table">
							<tr className="vu-center"><th>ID</th><th>Imię</th><th>Nazwisko</th><th>Firma</th><th>E-mail</th><th>Telefon</th></tr>
                            {users.map(user =>
                                <tr key={user.id}><td>{user.id}</td><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.company}</td><td>{user.mail}</td><td>{user.phone}</td></tr>
                            )}
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

export { UsersPage };