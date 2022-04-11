const express = require('express');
const routes = express.Router();
const homeController = require('./src/controller/homeController');
const middleware = require('./src/middlewares/middleware')

// Routes home
routes.get('/', homeController.home);
routes.post('/', homeController.datePost);

module.exports = routes;