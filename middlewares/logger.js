
const logger = (req, res, next) => {
    console.log('logger')
    console.log(req.method);
    console.log(req.url);
    next()
}

module.exports = {logger}