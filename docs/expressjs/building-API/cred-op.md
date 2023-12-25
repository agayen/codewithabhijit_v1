---
sidebar_position: 2
title: CRUD operations
description: Creating endpoints with CRUD operations in ExpressJs
keywords:   ['CRUD', 'CRUD operations','ExpressJs','Creating endpoints with CRUD operations in ExpressJs','Creating endpoints','Create','delete','update','read']
---

When creating RESTful APIs in Express.js, the endpoints should follow the CRUD operations, which stands for Create, Read, Update, and Delete. Each operation should be associated with a specific HTTP method, as follows:

- Create: POST
- Read: GET
- Update: PUT or PATCH
- Delete: DELETE

To create an endpoint that performs a specific operation, we need to define the route path and the corresponding function that handles the operation. Here's an example of a RESTful API that handles CRUD operations for a resource called "books":

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Define the database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books');

// Define the schema for the books resource
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String
});

// Define the model for the books resource
const Book = mongoose.model('Book', bookSchema);

// Create a new book
app.post('/books', (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre
  });
  book.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Book created successfully');
    }
  });
});

// Get all books
app.get('/books', (req, res) => {
  Book.find((err, books) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(books);
    }
  });
});

// Get a specific book
app.get('/books/:id', (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(book);
    }
  });
});

// Update a book
app.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre
  }, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Book updated successfully');
    }
  });
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Book deleted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

In this example, we define the route paths for creating, reading, updating, and deleting books, and use the corresponding HTTP methods to handle the operations. We also use the Mongoose library to define the schema and model for the books resource, and connect to a local MongoDB database. Finally, we start the server and listen for incoming requests.