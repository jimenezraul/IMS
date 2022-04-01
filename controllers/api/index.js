const router = require('express').Router();
const user = require('./user-routes');
const product = require('./product-routes');
const category = require('./category-routes');
const location = require('./location-routes');
const supplier = require('./supplier-routes');

router.use('/users', user);
router.use('/products', product);
router.use('/categories', category);
router.use('/locations', location);
router.use('/suppliers', supplier);

module.exports = router;