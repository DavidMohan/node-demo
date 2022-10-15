const express = require("express");

const booksController = require("../controllers/book.controller");

const booksRouter = express.Router();

booksRouter.post("/", booksController.postBook);
booksRouter.get("/b", booksController.getBooks);
booksRouter.get("/:bookId", booksController.getBook);

module.exports = booksRouter;