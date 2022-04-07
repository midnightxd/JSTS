const express = require('express');
const routes = express.Router();
const homeController = require('./src/controller/homeController');

// Routes home
routes.get('/', homeController.home);

module.exports = routes;