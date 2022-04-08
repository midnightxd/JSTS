module.exports = middleware = (req, res, next) => {
    next();
};

module.exports = checkCRSF = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }
};

module.exports = csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};