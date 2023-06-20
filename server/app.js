const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');

//load in mongoose models
const { Recipe } = require('./db/models/recipe.model');
const { Category } = require('./db/models/category.model');

//load middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTE HANDLERS FOR CATEGORY

// GET CATEGORIES
app.get('/category', (req,res) => {
  //return an array of all the categories in the database
  Category.find({}).then((category) =>
  res.send(category));
})

// EVENTUALLY GET BY ID -- ONCE USERS ARE ADDED

// POST CATEGORIES
app.post('/category', (req,res) => {
  //create a new category and return it back to the user (will include an id)
  let name = req.body.name;

  let newCategory = new Category({
    name
  });
  newCategory.save().then((category) => {
    res.send(category);
  })
});

// PUT/PATCH CATEGORIES
app.patch('/category/:id', (req,res) => {
  Category.findOneAndUpdate({ _id: req.params.id }, {
    $set: req.body
    }).then(() => {
      res.sendStatus(200);
  })
});


// DELETE CATEGORIES
app.delete('/category/:id', (req,res) => {
  Category.findOneAndRemove({
    _id: req.params.id
  }).then((removedCategory) => {
    res.send(removedCategory);
  })
});

//ROUTES FOR RECIPE
//TODO: restructure so that a category is not required for each recipe

app.get('/category/:categoryId/recipe', (req, res) => {
  //return all recipes that belong to a specific collection
  Recipe.find({
    _categoryId: req.params.categoryId
  }).then((recipe) => {
    res.send(recipe);
  })
});

//GET recipe by ID
app.get('/category/:categoryId/recipe/recipeId'), (req, res) => {
  Recipe.findOne({
    _id: req.params.recipeId,
    _categoryId: req.params.categoryId
  }).then((recipe) => {
    res.send(recipe);
  })
}

app.post('/category/:categoryId/recipe', (req, res) => {
  //create a new recipe associated with a specific category by ID
  let newRecipe = new Recipe({
    name: req.body.name,
    _categoryId: req.params.categoryId
  });
  newRecipe.save().then((newRecipeDoc) =>
  res.send(newRecipeDoc))
});

app.patch('/category/:categoryId/recipe/:recipeId', (req,res) => {
  // update recipe by id
  Recipe.findOneAndUpdate({ 
    _id: req.params.recipeId,
    _categoryId: req.params.categoryId 
  }, {
      $set: req.body
    }).then(() => {
      res.sendStatus(200);
  })
});

app.delete('/category/:categoryId/recipe/:recipeId', (req,res) => {
  Recipe.findOneAndRemove({
    _id: req.params.recipeId,
    _categoryId: req.params.categoryId
  }).then((removedRecipe) => {
    res.send(removedRecipe);
  })
});



app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})