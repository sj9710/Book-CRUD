const mongoose = require("mongoose");

const BookList = mongoose.Schema({
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

module.exports = mongoose.model("BookList", BookList);
