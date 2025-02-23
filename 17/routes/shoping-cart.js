const express = require('express');
const router = express.Router();

const { addToCart } = require('../controllers/addToCart');
const { deleteFromCart } = require('../controllers/deleteFromCart');


router.post('/add', addToCart);
router.delete('/delete', deleteFromCart);

module.exports = router;
