const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contatoSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipo dos dados
    auto: true, //é autogerado?
    required: true, //é obrigatório?
    },
  nome: {
      type: String,
      required: true,
      unique: true,
  },
  celular: {
    type: String,
    required: true,
  }
  });

  const contatosCollection = mongoose.model('contato', contatoSchema)
  module.exports = contatosCollection