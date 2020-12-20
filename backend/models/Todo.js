const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  text: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", Todo);
