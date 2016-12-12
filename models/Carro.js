var mongoose = require('mongoose');

var CarroSchema = new mongoose.Schema({
  modelo: String,
  ano: Number,
  cor: String

});

module.exports = mongoose.model('Carro', CarroSchema);
