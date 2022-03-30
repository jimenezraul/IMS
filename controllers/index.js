const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoutes = require('./home-route');

router.get('/', mainRoutes);
router.use('/api', apiRoutes);
    
module.exports = router;