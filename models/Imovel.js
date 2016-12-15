var mongoose = require('mongoose');

var CarroSchema = new mongoose.Schema({
  _id: String,  
  tipo: String,
  endereco: String,
  tamanho: Number,
  valor: Number
  

});

module.exports = mongoose.model('Crush', CrushSchema);
