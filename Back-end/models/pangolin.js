const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pangolinSchema = mongoose.Schema({
  idUser: { type: String, required: true },
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  famille: { type: String, required: true },
  race: { type: String, required: true },
  nourriture: { type: String, required: true },
  amis: { type: Array, default: [] }
});

module.exports = mongoose.model('Pangolin', pangolinSchema);