const config = require('config.js');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');

const express = require('express');

const db = require('database/queries');

// TODO: użytkownicy zapisani dla ułatwienia testów, podłaczyć potem baze danych

const users = [
    { id: 1, username: 'admin', password: 'admin', first_name: 'Jakiś', last_name: 'User', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Supervisor },
    { id: 2, username: 'user', password: 'user', first_name: 'Jakiś', last_name: 'User', mail: '1@2.pl', company: 'XXX', phone: '888777666', role: Role.Student },
    { id: 3, username: 'opiekun', password: 'opiekun', first_name: 'Jakiś', last_name: 'Opiekun', mail: '1@1.pl', company: 'YYY', phone: '888777666', role: Role.Supervisor },
    { id: 4, username: 'kierownik', password: 'kierownik', first_name: 'Jakiś', last_name: 'Kierownik', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Leader },
    { id: 5, username: 'klient', password: 'klient', first_name: 'Jakiś', last_name: 'Klient', mail: '1@1.com', company: 'XXX', phone: '888777666', role: Role.Client },
    { id: 6, username: 'Anastazy', password: 'Anastazy', first_name: 'Anastazy', last_name: 'Wiśniewski', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Student },
    { id: 7, username: 'Agata', password: 'Agata', first_name: 'Agata', last_name: 'Wicikowska', mail: '1@ggg.pl', company: 'ZZZ', phone: '888777666', role: Role.Student },
    { id: 8, username: 'Rafał', password: 'Rafał', first_name: 'Rafał', last_name: 'Klifeld', mail: 'agatawicikowska@gmail.com', company: 'XXX', phone: '888777666', role: Role.Student },
    { id: 9, username: 'Radek', password: 'Radek', first_name: 'Radek', last_name: 'Rudziewicz', mail: '1@1.pl', company: 'XXX', phone: '888777666', role: Role.Student },
    { id: 10, username: 'Patryk', password: 'Patryk', first_name: 'Patryk', last_name: 'Sadowski', mail: 'patryk@patryksadowski.pl', company: 'AAA', phone: '888888888', role: Role.Student }
];

module.exports = {
    authenticate,
    getAll,
    getById
};



async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret, {
              expiresIn: config.tokenExpireTime
          });
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

async function getById(uid) {
    const user = users.find(u => u.uid === parseInt(uid));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}