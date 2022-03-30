const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ 'index': 'index' });
});
    
module.exports = router;