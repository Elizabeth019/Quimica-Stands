const { Schema, model} = require('mongoose');

const Photo = new Schema({
  name:String,
  description: String,
  imageURL: String,
  public_id: String
})


module.exports = model('Photo', Photo)