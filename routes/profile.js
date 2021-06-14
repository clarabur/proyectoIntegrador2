var express = require('express');
const profileController = require('../controllers/profile');
var router = express.Router();

/* GET home page. */
router.get('/', profileController.profile)
router.get('/detalle/:id', profileController.show);


module.exports = router;