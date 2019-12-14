const express = require('express');
const router = express.Router();
const userService = require('users/user.service');
const projectService = require('./project.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

// routes
router.post('/authenticate', authenticate); 
router.post('/addproject', addProject);    // public route
router.get('/', authorize(Role.Admin), getAllProjects); // admin only
router.get('/:id', authorize(), getProjectById);       // all authenticated users

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nazwa użytkownika lub hasło jest niepoprawne.' }))
        .catch(err => next(err));
}



function getAllProjects(req, res, next) {
    projectService.getAllProjects()
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function getProjectById(req, res, next) {
    projectService.getProjectById(req.params.id)
        .then(project => project ? res.json(project) : res.sendStatus(404))
        .catch(err => next(err));;
}
function addProject(req, res, next) {
    projectService.addProject(req.body.project)
        .then(project => project ? res.json(project) : res.sendStatus(404))
        .catch(err => next(err));;
}