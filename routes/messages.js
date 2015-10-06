var express = require('express'),
    router = express.Router(),
    Message = require('../models/Message');

/* Healthcheck */
router.get('/_hc', function (req, res, next) {
    res.jsonp({status: 200, env: process.env});
});

router.get('/all', function (req, res, next) {
    Message.find(function (err, messages) {
        if (err) {
            console.log('Message.find error:', err);
            return next(err);
        } else {
            res.jsonp(messages);
        }
    });
});

router.post('/add', function (req, res, next) {
    Message.create(req.body, function (err, message) {
        if (err) {
            console.log('Message.create error', err);
            return next(err);
        } else {
            res.json(message);
        }
    });
});

module.exports = router;