const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

router.get('/products', (req, res, next) => {
  res.send('<h1>Shop Products Page</h1>');
});

module.exports = router;
