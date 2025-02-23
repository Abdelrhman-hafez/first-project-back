const { Product } = require('../models/product');

 const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: 'Product not found' });
        return res.json({ message: 'Product deleted successfully' })
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
module.exports = { deleteProduct };