const mongoose = require('mongoose');

const HomeScheme = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
});

const HomeModel = mongoose.model('Home', HomeScheme);