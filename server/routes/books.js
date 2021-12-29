var express = require('express');
var router = express.Router();

// Fake database
const fakeDb = {
  1: {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  2: {
    title: 'The Hobbit',
    author: 'JRR Tolkien'
  }
};


/* List all books */
router.get('/', function(req, res, next) {
  const booksArray = Object.values(fakeDb);
  res.send(booksArray);
});

/* Create book */
router.post('/', function(req, res, next) {
  const arr = Object.keys(fakeDb);
  const nextId = parseInt(arr[arr.length -1]) +1;

  const newBook = req.body;
  fakeDb[nextId] = newBook;

  res.send(newBook);
});

/* Read book */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const book = fakeDb[id];
  res.send(book);
});

/* Update book */
router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  const newBook = req.body;
  fakeDb[id] = newBook;
  res.send(newBook);
});

/* Delete book */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  const book = fakeDb[id];
  delete fakeDb[id];
  res.send(book);
});

module.exports = router;
