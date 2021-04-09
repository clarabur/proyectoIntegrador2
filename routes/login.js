var express = require('express');
const loginController = require('../controllers/login');
var router = express.Router();

/* GET home page. */
router.get('/', loginController.login) 

module.exports = router;
