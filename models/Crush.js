var mongoose = require('mongoose');

var CrushSchema = new mongoose.Schema({
  _id: String,  
  nome: String,
  idade: Number,
  patrimonio: String,
  grauEscalaMarquezine: Number
  

});

module.exports = mongoose.model('Crush', CrushSchema);
