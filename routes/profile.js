var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile');
});

router.get('/edit', function(req, res, next) {
    res.render('profile-edit');
});

module.exports = router;