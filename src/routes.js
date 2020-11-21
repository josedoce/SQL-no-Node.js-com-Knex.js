const express = require('express');

const rota = express.Router();

const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectsController');

rota
    //users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    //projects
    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)
    .put('/projects/:id', ProjectController.update)
    .delete('/projects/:id', ProjectController.delete)

module.exports = rota;