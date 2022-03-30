const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/', (req, res) => {
    res.json({ 'index': 'index' });
});

router.use('/api', apiRoutes);
    
module.exports = router;