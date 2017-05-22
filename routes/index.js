const express = require('express');
const router = express.Router();

exports = module.exports = router;

router.all('/', (req, res, next) => {
    res.render('index');
});