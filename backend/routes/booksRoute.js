import express from "express";
import { Book } from "../models/bookModels.js";

const router = express.Router();

// Save a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required feilds:  title, author, publishyear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: parseInt(req.body.publishYear),
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

// Route to get all books from database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Route to get one book from database
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Route for update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send All feilds: title, author, publishYear",
      });
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found!" });
    }

    return res.status(200).send({ message: "Book updated succesfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//Route for delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found!" });
    }

    return res.status(200).send({ message: "Book deleted Successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

export default router;