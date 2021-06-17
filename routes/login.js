var express = require('express');
const loginController = require('../controllers/login');
var router = express.Router();

/* GET home page. */
router.get('/', loginController.index) 
router.post('/', loginController.login) 
router.post('/logout', loginController.logout) 
module.exports = router;
