'use strict';

const jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {

    let token = req.headers['authorization'];
    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return null;
    }

    token = token.replace('Bearer ', '');

    jwt.verify(token, 'mateo', (err, user) => {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
        } else {
            // res.send({
            //     message: 'Awwwww yeah!!!!'
            // })
            next();
        }
    })

}

module.exports = {
    checkToken: checkToken
}