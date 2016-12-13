var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    genero: String,
    turma: String,
    turno: String,
    matricula: Number

});

module.exports = mongoose.model('Aluno', AlunoSchema);
