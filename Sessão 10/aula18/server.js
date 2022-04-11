require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const checkCRSF = require('./src/middlewares/middleware');
const csrfMiddleware = require('./src/middlewares/middleware');
const middleware = require('./src/middlewares/middleware');

// Connection with database
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('Connection as bien started.');
    })
    .catch(e => {
        console.log('Unexpected error.');
    });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashMensage = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const crsf = require('csurf');

// App settings
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const sessionOptions = session({
    secret: 'Ew^?@me=XL5wH^=d()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flashMensage());
app.use(crsf());
app.use(checkCRSF);
app.use(csrfMiddleware);
app.use(middleware);
app.use(routes);

app.on('Connection as bien started.', () => {
    app.listen(3000, () => {
        console.log('Server has bien started.');
        console.log('Please access link: http://localhost:3000');
    });
});