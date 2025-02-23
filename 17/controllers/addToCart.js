const { users } = require('../models/users')
const { Product } = require('../models/product')

const addToCart = async (req, res) => {
    const { product, username } = req.body;
    if (!username || !product) {
        return res.status(400).json({ message: "Please enter all the fields" })
    }

    const getuser = await users.findOne({ username })
    const getproduct = await Product.findOne({ name:product })

    if (getuser === null) {
        return res.status(400).json({ message: "user not find..." })
    }
    if (getproduct === null) {
        return res.status(400).json({ message: "product not find..." })
    }
     
    getuser.shoppingCart.push(getproduct)
    await getuser.save()
    return res.status(200).json({ message: "Added successfully" });

}
// addToCart.js
module.exports = { addToCart }