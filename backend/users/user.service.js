﻿const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

// TODO: użytkownicy zapisani dla ułatwienia testów, podłaczyć potem baze danych
const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Jakiś', lastName: 'User', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Jakiś', lastName: 'User', mail: '1@2.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 3, username: 'opiekun', password: 'opiekun', firstName: 'Jakiś', lastName: 'Opiekun', mail: '1@1.pl', company: 'YYY', phone: '888777666', role: Role.Admin },
    { id: 4, username: 'kierownik', password: 'kierownik', firstName: 'Jakiś', lastName: 'Kierownik', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 5, username: 'klient', password: 'klient', firstName: 'Jakiś', lastName: 'Klient', mail: '1@1.com', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 6, username: 'Anastazy', password: 'Anastazy', firstName: 'Anastazy', lastName: 'Wiśniewski', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 7, username: 'Agata', password: 'Agata', firstName: 'Agata', lastName: 'Wicikowska', mail: '1@ggg.pl', company: 'ZZZ', phone: '888777666', role: Role.Admin },
    { id: 8, username: 'Rafał', password: 'Rafał', firstName: 'Rafał', lastName: 'Klifeld', mail: 'agatawicikowska@gmail.com', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 9, username: 'Radek', password: 'Radek', firstName: 'Radek', lastName: 'Rudziewicz', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 10, username: 'Patryk', password: 'Patryk', firstName: 'Patryk', lastName: 'Sadowski', mail: 'patryk@patryksadowski.pl', company: 'AAA', phone: '888888888', role: Role.Admin }
];

const students = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Jakiś', lastName: 'User', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Jakiś', lastName: 'User', mail: '1@2.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 6, username: 'Anastazy', password: 'Anastazy', firstName: 'Anastazy', lastName: 'Wiśniewski', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 7, username: 'Agata', password: 'Agata', firstName: 'Agata', lastName: 'Wicikowska', mail: '1@ggg.pl', company: 'ZZZ', phone: '888777666', role: Role.Admin },
    { id: 8, username: 'Rafał', password: 'Rafał', firstName: 'Rafał', lastName: 'Klifeld', mail: 'agatawicikowska@gmail.com', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 9, username: 'Radek', password: 'Radek', firstName: 'Radek', lastName: 'Rudziewicz', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin },
    { id: 10, username: 'Patryk', password: 'Patryk', firstName: 'Patryk', lastName: 'Sadowski', mail: 'patryk@patryksadowski.pl', company: 'AAA', phone: '888888888', role: Role.Admin }
];

const curators = [
    { id: 3, username: 'opiekun', password: 'opiekun', firstName: 'Jakiś', lastName: 'Opiekun', mail: '1@1.pl', company: 'YYY', phone: '888777666', role: Role.Admin }
];

const leaders = [
    { id: 4, username: 'kierownik', password: 'kierownik', firstName: 'Jakiś', lastName: 'Kierownik', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Admin }
];

const clients = [
    { id: 5, username: 'klient', password: 'klient', firstName: 'Jakiś', lastName: 'Klient', mail: '1@1.com', company: 'XXX', phone: '888777666', role: Role.Admin }
];

module.exports = {
    authenticate,
    getAll,
	getAllStudents,
	getAllCurators,
	getAllLeaders,
	getAllClients,
    getById
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getAllStudents() {
    return students.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getAllCurators() {
    return curators.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getAllLeaders() {
    return leaders.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getAllClients() {
    return clients.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getById(id) {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}