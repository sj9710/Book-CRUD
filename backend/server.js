const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./models/BookList");

require('dotenv').config();

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Book.find((err, Book) => {
    if (err) {
      console.log(err);
    } else {
      res.json(Book);
    }
  });
});

app.post("/create", (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  Book.findByIdAndRemove(id, (err) => {
    if (!id) {
      res.status(404).send("Book not found");
    }
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id, (err, book) => {
    res.json(book);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id, (err, book) => {
    if (!book) {
      res.status(404).send("Book not found");
    } else {
      book.text = req.body.text;
      book.author = req.body.author;
      book.genre = req.body.genre;

      book
        .save()
        .then((book) => {
          res.json(book);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// var MongoClient = require("mongodb").MongoClient;
