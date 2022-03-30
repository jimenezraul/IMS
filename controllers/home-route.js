const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('mainpage');
});

module.exports = router;