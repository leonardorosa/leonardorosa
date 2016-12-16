var mongoose = require('mongoose');

var ImovelSchema = new mongoose.Schema({
    
  tipo: String,
  endereco: String,
  tamanho: Number,
  valor: Number,
  login: String,
  senha: String
  

});

module.exports = mongoose.model('Imovel', ImovelSchema);
