const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Is not a Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.listen(3000, () => {
    console.log('Server state: online');
    console.log('Access on http://localhost:3000');
});