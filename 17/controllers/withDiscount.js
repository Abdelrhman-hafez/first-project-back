const coupons = [
    { code: "DISCOUNT10", discount: 10, usedBy: [] },
    { code: "SAVE20", discount: 20, usedBy: [] },
    { code: "OFFER30", discount: 30, usedBy: [] }
];


const applyCoupon = (req, res) => {
    const { username, totalPrice, couponCode } = req.body;

    if (!username || !totalPrice || !couponCode) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const coupon = coupons.find(c => c.code === couponCode);

    if (!coupon) {
        return res.status(400).json({ message: "Invalid coupon code!" });
    }

    if (coupon.usedBy.includes(username)) {
        return res.status(400).json({ message: "You have already used this coupon!" });
    }

    const discountAmount = (totalPrice * coupon.discount) / 100;
    const finalPrice = totalPrice - discountAmount;

    coupon.usedBy.push(username);

    res.json({
        success: true,
        originalPrice: totalPrice,
        discountApplied: ` ${coupon.discount}%`,
        finalPrice
    });
};

module.exports = { applyCoupon };