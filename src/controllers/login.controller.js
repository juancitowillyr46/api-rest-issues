const jwt = require('jsonwebtoken');

exports.login = (req, res) => {

    const username = req.body.user;
    const password = req.body.password;
    const secret = 'mateo';

    if (!(username === 'oscar' && password === '1234')) {   
        res.status(401).send({     
            error: 'usuario o contraseña inválidos'   
        })   
        return  null; 
    }

    const tokenData = {
        username: username
    }

    const token = jwt.sign(tokenData, secret, {  
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });

    res.send({ token });

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