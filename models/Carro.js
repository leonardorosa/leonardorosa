var mongoose = require('mongoose');

var CarroSchema = new mongoose.Schema({
  marca: String,  
  modelo: String,
  ano: Number,
  cor: String,
  placa: String,
  cambio: String
  

});

module.exports = mongoose.model('Carro', CarroSchema);
