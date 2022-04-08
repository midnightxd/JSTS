const dotenv = require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('Connection as bien started.');
    })
    .catch (e => {
        console.log('Unexpected error.');
    });

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('Connection as bien started.', () => {
    app.listen(3000, () => {
        console.log('Server has bien started.');
        console.log('Please access link: http://localhost:3000');
    });
});