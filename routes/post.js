const express = require('express');
const router = express.Router();
const iapi = require('iapi');
const config = require('../config');

iapi.config = config.db;
exports = module.exports = router;

router.all('/', (req, res, next) => {
    let data = req.body;
    iapi.api('test/insert', { data: data }, (err, result) => {
        res.send(err ? err : result);
    });
});