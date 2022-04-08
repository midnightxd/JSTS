const express = require('express');
const routes = express.Router();
const homeController = require('./src/controller/homeController');
const middleware = require('./src/middlewares/middleware')

// Routes home
routes.get('/', middleware, homeController.home);

module.exports = routes;