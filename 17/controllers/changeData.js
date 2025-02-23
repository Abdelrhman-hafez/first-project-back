const { Product } = require('../models/product');
require('dotenv').config();
const changeData = async (req, res) => {
    try {
        const { name, discription, price } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        if ((discription && price) || (!discription && !price)) {
            return res.status(400).json({ error: 'Send only one field (discription or price) along with name' });
        }

        const updateData = { name };
        if (discription) updateData.discription = discription;
        if (price) updateData.price = price;

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.json(updatedProduct);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
module.exports = { changeData };