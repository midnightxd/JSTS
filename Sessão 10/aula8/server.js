const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do client: <input type="text" name="name">
    <button>Enviar</button>
    </form>`);
});

app.get('/test/:idUser?/:param?', (req, res) => {
    console.log(req.params);
    console.log(req.query)
    res.send(req.query.idUser);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recevide: ${req.body.name}`)
})

app.listen(3000, () => {
    console.log('Serevr is online');
    console.log('Access on http://localhost:3000');
});