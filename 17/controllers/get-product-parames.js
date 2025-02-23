const { Product } = require('../models/product');

const getProductParams = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        return res.json(product);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
module.exports = { getProductParams };