const express = require('express');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "hello thsi is user request"
    });
});
router.post('/', (req, res, next) => {

    User.find({ mail: req.body.mail }).exec().
        then(result => {
            console.log("result"+result.length);
            if (result.length >= 1) {
                res.status(422).json({
                    message: 'user already exsits'
                });
            } else {
                const user_1 = new User({
                    _id: mongoose.Types.ObjectId(),
                    mail: req.body.mail,
                    name: req.body.name,
                    age: req.body.age
                });

                user_1.save().then(result => {
                    console.log(result);
                    res.status(200).json({
                        message: result,
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        message: err,
                    });
                });
            }

        }).catch(err => {
            res.status(500).json({
                message: err,
            });
        });




});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: "hello thsi is user request"
    });
});
router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: "hello thsi is user request"
    });
});
module.exports = router;