const router = require('express').Router();
const user = require('./user-routes');
const product = require('./product-routes');
const category = require('./category-routes');

router.use('/users', user);
router.use('/products', product);
router.use('/categories', category);

module.exports = router;