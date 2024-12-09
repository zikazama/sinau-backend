const jwt = require('jsonwebtoken');

const login = (data) => {
    if(data.username === 'sinau' && data.password === 'koding'){
        const token = jwt.sign({username: data.username}, 'secret', {expiresIn: '1h'});
        return token;
    } else {
        return false;
    }
}

module.exports = { login };