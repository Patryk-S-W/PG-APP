import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const projectService = {
    getAllProjects,
    getProjectsById,
    addProject,
    addUserToProject
};

function getAllProjects() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/projects`, requestOptions).then(handleResponse);
}

function getProjectsById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/projects/${id}`, requestOptions).then(handleResponse);
}
function addProject(project) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)     
    };
    return fetch(`${config.apiUrl}/projects/addproject`, requestOptions)
    .then(handleResponse)
}
function addUserToProject(idUser,idProject) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({idUser,idProject})     
    };
    return fetch(`${config.apiUrl}/projects/addusertoproject`, requestOptions)
    .then(handleResponse)
}