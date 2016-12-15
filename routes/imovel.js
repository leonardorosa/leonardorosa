var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Imovel = require('../models/Imovel.js');

/* GET /imovel Listagem de imoveis. */
router.get('/', function(req, res, next) {
  Imovel.find(function (err, imovel) {
    if (err) return next(err);
    res.json(imovel);
  });
});

/* POST /imovel Cadastro de imovel */
router.post('/', function(req, res, next) {
  Imovel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /imovel/id  Lista filtrada por um imovel*/
router.get('/:id', function(req, res, next) {
  Imovel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /imovel/:id Salva a edição de imovel */
router.put('/:id', function(req, res, next) {
  Imovel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /imovel/:id Deletando o imovel a partir do id */
router.delete('/:id', function(req, res, next) {
  Imovel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
