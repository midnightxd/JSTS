exports.home = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do client: <input type="text" name="name">
    <button>Enviar</button>
    </form>`);
}

exports.form = (req, res) => {
    res.send('Form has bien updated');
}