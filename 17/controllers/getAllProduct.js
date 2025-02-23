const { Product } = require('../models/product');

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
module.exports = { getAllProduct };