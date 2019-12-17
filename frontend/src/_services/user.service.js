import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const userService = {
    getAll,
	getByRole,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(uid) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/uid/${uid}`, requestOptions).then(handleResponse);
}


function getByRole(role) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users/role/${role}`, requestOptions).then(handleResponse);
}