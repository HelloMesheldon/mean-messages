var express = require('express'),
    router = express.Router(),
    Message = require('../models/Message');

router.get('/all', function (req, res, next) {
    Message.find(function (err, messages) {
        if (err) {
            console.log('Message.find error:', err);
            return next(err);
        } else {
            console.log('Message.find complete');
            res.json(messages);
        }
    });
});

router.post('/add', function (req, res, next) {
    console.log(req.body);
    Message.create(req.body, function (err, message) {
        if (err) {
            console.log('Message.create error', err);
            return next(err);
        } else {
            console.log('Message.create complete');
            res.json(message);
        }
    });
});

module.exports = router;