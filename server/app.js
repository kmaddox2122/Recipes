const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');

//load in mongoose models
const { Recipe } = require('./db/models/recipe.model');

//load middleware
app.use(bodyParser.json());

// ROUTE HANDLERS

// GET RECIPES
app.get('/recipes', (req,res) => {
  //return an array of all the recipes in the database
  Recipe.find({}).then((recipes) =>
  res.send(recipes));
})

// EVENTUALLY GET BY ID -- ONCE USERS ARE ADDED

// POST RECIPES
app.post('/recipes', (req,res) => {
  //create a new recipe and return it back to the user (will include an id)
  let name = req.body.name;

  let newRecipe = new Recipe({
    name
  });
  newRecipe.save().then((recipeList) => {
    res.send(recipeList);
  })
});

// // PUT/PATCH RECIPES
// app.patch('/recipes/:id', (req,res => {
//   // update recipe by id
// }))


// // DELETE RECIPES
// app.delete('/recipes/:id', (req,res => {
//   // delete recipe by id
// }))


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})