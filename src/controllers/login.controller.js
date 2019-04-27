'use strict';
const User = require('../models/user.model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');


exports.login = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const secret = 'mateo';

    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            res.status(500).send({ error: 'Error en la petición' });
        } else {
            if (!user) {
                res.status(404).send({ error: 'El usuario no existe' });
            } else {
                bcrypt.compare(password, user.password, function(err, check) {
                    if (check) {
                        //res.send({ check });
                        const tokenData = {
                            username: username
                        }

                        const token = jwt.sign(tokenData, secret, {  
                            expiresIn: 60 * 60 * 24 // expires in 24 hours
                        });

                        res.send({ token });

                    } else {

                        res.status(401).send({     
                            error: 'usuario o contraseña inválidos'   
                        });

                    }
                });
            }
        }
    });

}

exports.secure = (req, res) => {

    let token = req.headers['authorization'];
    if (!token) {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
        })
        return null;
    }

    token = token.replace('Bearer ', '');

    jwt.verify(token, 'mateo', function(err, user) {
        if (err) {
            res.status(401).send({
                error: 'Token inválido'
            })
        } else {
            res.send({
                message: 'Awwwww yeah!!!!'
            })
        }
    })

}