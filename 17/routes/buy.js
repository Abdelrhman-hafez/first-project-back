const express = require('express');
const router = express.Router();

const { withoutDiscount } = require('../controllers/withoutDiscount');
const { applyCoupon } = require('../controllers/withDiscount');

router.post('/without-discount', withoutDiscount);
router.post('/with-discount', applyCoupon);

module.exports = router;
