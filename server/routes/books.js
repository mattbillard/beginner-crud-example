var express = require('express');
var router = express.Router();

/* List all books */
router.get('/', function(req, res, next) {
  res.send('List all books');
});

/* Create book */
router.post('/', function(req, res, next) {
  res.send(`create new book`);
});

/* Read book */
router.get('/:id', function(req, res, next) {
  console.log('...', req);
  res.send(`read book # ${req.params.id}`);
});

/* Update book */
router.put('/:id', function(req, res, next) {
  res.send(`update book # ${req.params.id}`);
});

/* Delete book */
router.delete('/:id', function(req, res, next) {
  res.send(`delete book # ${req.params.id}`);
});

module.exports = router;
