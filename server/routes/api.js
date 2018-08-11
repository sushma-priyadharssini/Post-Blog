const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');

router.get('/', function (req, res, next) {
  Posts.find({}, function (err, data) {
    res.send({ data : data });
  });
});

router.post('/posts', function (req, res, next) {
  Posts.create(req.body).then(function (post) {
    res.send([post]);
  }).catch(next);
});

router.get('/posts/:id', function (req, res, next) {
  Posts.findOne({ blogId: req.params.id }).then(function (post) {
    res.send({ data : post });
  });
});

module.exports = router;
