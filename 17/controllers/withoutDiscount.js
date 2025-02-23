const { users } = require('../models/users')


const withoutDiscount = async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: "Please enter username" })
    }

    const getuser = await users.findOne({ "username": username })

    if (getuser === null) {
        return res.status(400).json({ message: "user not find..." })
    }
    let total = 0;
    products = [];
    const cart = getuser.shoppingCart;
    console.log(cart);
    for (const product of cart) {
        total += product.price;
        console.log(product);
        
        products.push(product)
    }
    return res.status(200).json({ products, total });

}

module.exports = { withoutDiscount }