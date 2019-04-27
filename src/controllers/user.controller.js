'use strict';
const User = require('../models/user.model');
const bcrypt = require('bcrypt-nodejs');

exports.post = (req, res) => {
    let user = new User(req.body);

    bcrypt.hash(req.body.password, null, null, function(err, hash) {
        user.password = hash;
        if (req.body.username !== null) {
            user.save((err, user) => {
                if (err) {
                    res.status(500).send({ message: 'Error al guardar el usuario' });
                } else {
                    if (!user) {
                        res.status(404).send({ message: 'No se ha registrado el usuario' });
                    } else {
                        res.status(200).send({ user: user });
                    }
                }
            });
        } else {
            res.status(200).send({ message: 'Introduce todos los campos' });
        }
    });

    // user.save()
    //     .then(issue => {
    //         res.status(200).json({ 'message': 'Added successfully' });
    //     })
    //     .catch(err => {
    //         res.status(400).send('Failed to create new Record');
    //     });
}