var express = require('express');
const registerController = require('../controllers/register');
var router = express.Router();

/* GET home page. */
router.get('/', registerController.register)

module.exports = router;