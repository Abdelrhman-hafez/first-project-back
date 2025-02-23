const express = require('express');
const router = express.Router();

const { getAllProduct } = require('../controllers/getAllProduct');
const { getProductParams } = require('../controllers/get-product-parames');
const { addProduct } = require('../controllers/addProduct');
const { changeData } = require('../controllers/changeData');
const { deleteProduct } = require('../controllers/delete-product');

router.get('/all-product', getAllProduct);
router.get('/:id', getProductParams);
router.post('/add-product', addProduct);
router.put('/change-data/:id', changeData);
router.delete('/delete-product/:id', deleteProduct);

module.exports = router;