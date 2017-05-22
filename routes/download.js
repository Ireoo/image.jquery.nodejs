const express = require('express');
const router = express.Router();
const iapi = require('iapi');
const config = require('../config');

iapi.config = config.db;
exports = module.exports = router;

router.all('/:id', (req, res, next) => {
    let data = req.body;
    iapi.api('test/findone', { where: { _id: req.params.id } }, (err, result) => {
        if (!err) {
            delete result._id;
            let data = '';
            for (let key in result) {
                data += key + ': ' + result[key] + "\r\n";
            }
            data += '结束'
            res.status(200).set({
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename=' + req.params.id + '.txt',
                'Content-Length': data.length
            }).send(data);
        }
    });
});