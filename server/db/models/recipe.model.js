const mongoose = require ('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _recipeId: {
    type: mongoose.Types.ObjectId,
    required: false
  }
})

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = { Recipe }