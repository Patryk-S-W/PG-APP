import React from 'react';

import { userService, authenticationService } from '@/_services';

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
                <h1>Strona główna</h1>
                <p>Jesteś zalogowany.</p>
                <p>Twoja rola: <strong>{currentUser.role}</strong>.</p>
                <div>
                    Zwrócona z API nazwa:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.firstName} {userFromApi.lastName}</li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export { HomePage };