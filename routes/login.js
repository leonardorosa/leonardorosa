var express = require('express');
var jwt = require('jsonwebtoken');

var secretKey = "e>@O103o&0ix-sbkzAr8439+jE5p^C";
var router = express.Router();

var Imovel = require('../models/Imovel.js');

router.post('/', function (req, res, next) {
    Imovel.findOne({login: req.body.username, senha: req.body.password}, 'login')
            .exec(function (err, imovel) {
                if (err)
                    res.send(err);
                if (imovel !== null) {
                    var token = jwt.sign(imovel, secretKey, {
                        expiresIn: "1 day"
                    });
                    res.json({imovel: imovel, token: token});
                } else {
                    res.status(400).send('Login/Senha incorretos');
                }
            });
});

module.exports = router;