import React from 'react';

import { userService } from '@/_services';

class AdminPage extends React.Component {
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
                <h1>Panel administratora</h1>
                <p>Jesteś zalogowany.</p>
                <div>
                    Wszyscy użytkownicy:
                    {users &&
                        <ul>
                            {users.map(user =>
                                <li key={user.id}>{user.first_name} {user.last_name}</li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export { AdminPage };