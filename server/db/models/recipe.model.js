const mongoose = require ('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _categoryId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
})

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = { Recipe }