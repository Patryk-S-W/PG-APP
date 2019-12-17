const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');
const db = require('database/queries');

// routes
router.post('/authenticate', authenticate);     // public route
router.get('/', authorize(Role.Admin), getUsers); // admin only
router.get('/:id', authorize(), getUserById);       // all authenticated users
module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nazwa użytkownika lub hasło jest niepoprawne.' }))
        .catch(err => next(err));
}

function register(req, res){
     var login = req.body.login;
     return userService.getUserByLogin(req.body.login || '')
     .then(exists => {
          if (exists){
               return res.send({
                   success: false,
                   message: 'Registration failed. User with this email already registered.'
               });
          }
          var user = {
               login: req.body.login,
               password: bcrypt.hashSync(req.body.password, config.saltRounds)
           }
          return userService.addUser(user)
          .then(() => res.send({success: true}));
     });
};

function getUsers(req, res, next) {
    db.getUsers()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getUserById(req, res, next) {
    const currentUser = req.user;
    const id = parseInt(req.params.id);

    // only allow admins to access other user records
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    db.getUserById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}