const express = require('express');
const routes = express.Router();
const homeController = require('./src/controller/homeController');

// Routes home
routes.get('/', middleWares, homeController.home);

module.exports = routes;