var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Carro = require('../models/Usuario.js');

/* GET /carro Listagem de carros. */
router.get('/', function(req, res, next) {
  Carro.find(function (err, carro) {
    if (err) return next(err);
    res.json(carro);
  });
});

/* POST /carro Cadastro de carro */
router.post('/', function(req, res, next) {
  Carro.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /carro/id  Lista filtrada por um carro*/
router.get('/:id', function(req, res, next) {
  Carro.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /carro/:id Salva a edição de carro */
router.put('/:id', function(req, res, next) {
  Carro.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /carro/:id Deletando o carro a partir do id */
router.delete('/:id', function(req, res, next) {
  Carro.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
