const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

  const blogSchema = new Schema({
    name: String,
    test: Date,
    ind: Number
    } , {
    collection: 'Searchs'
  });


  module.exports = mongoose.model('Searchs' , blogSchema);
