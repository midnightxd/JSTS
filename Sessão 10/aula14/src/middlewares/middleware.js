mudule.exports = (req, res, next) => {
    console.log('Its a middleware');
    next();
};