const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Is a home');
});

app.listen(3000, () => {
    console.log('Server as been started');
    console.log('Access rout: http://localhost:3000');
});