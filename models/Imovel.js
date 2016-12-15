var mongoose = require('mongoose');

var ImovelSchema = new mongoose.Schema({
  _id: String,  
  tipo: String,
  endereco: String,
  tamanho: Number,
  valor: Number
  

});

module.exports = mongoose.model('Imovel', ImovelSchema);
