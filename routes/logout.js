var express = require('express');
const loginController = require('../controllers/login');
var router = express.Router();

/* GET home page. */

router.post('/', loginController.login) 

module.exports = router;