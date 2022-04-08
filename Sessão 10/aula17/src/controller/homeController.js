exports.home = (req, res) => {
    res.render('index', {
        title: 'este é o tal do title'
    });
    return;
};