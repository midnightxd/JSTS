const express = require('express');
const app = express();

//Routes

app.get('/', (req, res) => {
    res.send('Hello word!');
});

app.get('/about', (req, res) => {
    res.send('Contatos');
})

app.listen(3000, () => {
    console.log('Server is online on port 3000');
    console.log('Access http://localhost:3000')
});