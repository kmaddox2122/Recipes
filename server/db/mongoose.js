//This file will handle connection logic to mongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/RecipeHolder', { useNewUrlParser: true }).then(() => {
  console.log("Connected to MongoDB successfully");
}).catch((e) => {
  console.log("Error while attempting to connect to MongoDB");
  console,log(e);
});

// mongoose.set('useCreateindex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
  mongoose
};