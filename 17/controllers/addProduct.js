const { Product } = require('../models/product');
require('dotenv').config();
const addProduct = async (req, res) => {
    try {
        const { name, discription, price } = req.body;
        const newProduct = await Product.create({ name, discription, price });
        return res.status(201).json(newProduct);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
module.exports = { addProduct };