var express = require('express');
var router = express.Router();

var Crush = require('../models/Crush.js');

/* GET /crush Listagem de crushes. */
router.get('/', function(req, res, next) {
  Crush.find(function (err, crush) {
    if (err) return next(err);
    res.json(crush);
  });
});

/* POST /crush Cadastro de crush */
router.post('/', function(req, res, next) {
  Crush.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /crush/id  Lista filtrada por um crush*/
router.get('/:id', function(req, res, next) {
  Crush.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /crush/:id Salva a edição de crush */
router.put('/:id', function(req, res, next) {
  Crush.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /crush/:id Deletando o crush a partir do id */
router.delete('/:id', function(req, res, next) {
  Crush.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;