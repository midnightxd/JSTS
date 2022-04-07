const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

// Routes Home
route.get('/', homeController.home);
route.post('/', homeController.form)

// Routes contacts
route.get('/contacts', contactController.contacts)

module.exports = route;